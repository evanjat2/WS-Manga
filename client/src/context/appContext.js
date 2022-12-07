import React, { useReducer, useContext } from "react";
import axios from "axios";
import reducer from "./reducer";

import {
  CLEAR_ALERT,
  DISPLAY_ALERT,
  REGISTER_USER_BEGIN,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  LOGIN_USER_BEGIN,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  LOGOUT_USER,
  UPDATE_USER_BEGIN,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_ERROR,
  CLEAR_VALUES,
  CREATE_BOOK_BEGIN,
  CREATE_BOOK_SUCCESS,
  CREATE_BOOK_ERROR,
  GET_SELL_BEGIN,
  GET_SELL_SUCCESS,
  SET_UPDATE_SELL,
  UPDATE_BOOK_BEGIN,
  UPDATE_BOOK_SUCCESS,
  UPDATE_BOOK_ERROR,
  DELETE_BOOK_BEGIN,
  DELETE_BOOK_SUCCESS,
  DELETE_BOOK_ERROR,
  GET_OWNED_BOOK_SUCCESS,
  CHOOSE_BOOK,
} from "./actions";

const token = localStorage.getItem("token");
const user = localStorage.getItem("user");
const choosedBook = localStorage.getItem("choosedBook");

const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: "",
  alertType: "",
  user: user ? JSON.parse(user) : null,
  token: token,
  isEditing: false,
  editBookId: "",
  judul: "",
  detail: "",
  pengarang: "",
  istoSell: "",
  owner: "",
  ownedBook: [],
  choosedBook: choosedBook ? JSON.parse(choosedBook) : null,
  urlEndpoint: process.env.REACT_APP_URL_ENDPOINT,
  publicKey: process.env.REACT_APP_PUBLIC_KEY,
  authenticationEndpoint: process.env.REACT_APP_AUTHENTICATION_ENDPOINT,
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // axios
  const authFetch = axios.create({
    baseURL: "/api/v1",
  });

  // request
  authFetch.interceptors.request.use(
    (config) => {
      config.headers.common["Authorization"] = `Bearer ${state.token}`;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  // response

  authFetch.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      // console.log(error.response)
      if (error.response.status === 401) {
        logoutUser();
      }
      return Promise.reject(error);
    }
  );
  const displayAlert = () => {
    dispatch({ type: DISPLAY_ALERT });
    clearAlert();
  };
  const clearAlert = () => {
    setTimeout(() => {
      dispatch({ type: CLEAR_ALERT });
    }, 3000);
  };

  const addUserToLocalStorage = ({ user, token }) => {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token);
  };

  const removeUserFromLocalStorage = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };

  const registerUser = async (currentUser) => {
    dispatch({ type: REGISTER_USER_BEGIN });
    try {
      const response = await axios.post("/api/v1/auth/register", currentUser);
      console.log(response);
      const { user, token } = response.data;
      dispatch({
        type: REGISTER_USER_SUCCESS,
        payload: { user, token },
      });
      addUserToLocalStorage({ user, token });
    } catch (error) {
      console.log(error.response);
      dispatch({
        type: REGISTER_USER_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
    clearAlert();
  };

  const loginUser = async (currentUser) => {
    dispatch({ type: LOGIN_USER_BEGIN });
    try {
      const { data } = await axios.post("/api/v1/auth/login", currentUser);

      const { user, token } = data;
      dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: { user, token },
      });
      addUserToLocalStorage({ user, token });
    } catch (error) {
      dispatch({
        type: LOGIN_USER_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
    clearAlert();
  };

  const updateUser = async (currentUser) => {
    dispatch({ type: UPDATE_USER_BEGIN });
    try {
      const { data } = await axios.patch(
        "/api/v1/auth/updateUser",
        currentUser,
        {
          headers: {
            Authorization: `Bearer ${state.token}`,
          },
        }
      );
      const { user, token } = data;
      dispatch({
        type: UPDATE_USER_SUCCESS,
        payload: { user, token },
      });
      addUserToLocalStorage({ user, token });
    } catch (error) {
      if (error.response.status !== 401) {
        dispatch({
          type: UPDATE_USER_ERROR,
          payload: { msg: error.response.data.msg },
        });
      }
    }
    clearAlert();
  };

  const logoutUser = () => {
    dispatch({ type: LOGOUT_USER });
    removeUserFromLocalStorage();
  };

  const clearValues = () => {
    dispatch({ type: CLEAR_VALUES });
  };

  const createBook = async (submittedData) => {
    dispatch({ type: CREATE_BOOK_BEGIN });
    try {
      const { data } = await axios.post("/api/v1/sell", submittedData, {
        headers: {
          Authorization: `Bearer ${state.token}`,
        },
      });
      dispatch({
        type: CREATE_BOOK_SUCCESS,
        payload: { data },
      });
      dispatch({ type: CLEAR_VALUES });
    } catch (error) {
      dispatch({
        type: CREATE_BOOK_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
    clearAlert();
  };

  const getAllSell = async () => {
    dispatch({ type: GET_SELL_BEGIN });
    try {
      const { data } = await axios.get("/api/v1/sell/all");
      dispatch({
        type: GET_SELL_SUCCESS,
        payload: { data },
      });
    } catch (error) {
      console.log("Error");
    }
    clearAlert();
  };

  const getOwnedBook = async () => {
    try {
      const { data } = await axios.get("/api/v1/sell", {
        headers: {
          Authorization: `Bearer ${state.token}`,
        },
      });
      const { book, totalBooks } = data;
      dispatch({
        type: GET_OWNED_BOOK_SUCCESS,
        payload: { data },
      });
      console.log(book);
    } catch (error) {
      console.log("Error");
    }
  };

  const chooseBook = (book) => {
    dispatch({ type: CHOOSE_BOOK, payload: { book } });
    localStorage.removeItem("choosedBook");
    localStorage.setItem("choosedBook", JSON.stringify(book));
  };

  const setUpdateSell = (id) => {
    dispatch({ type: SET_UPDATE_SELL, payload: { id } });
  };

  const deleteBook = async (id) => {
    dispatch({ type: DELETE_BOOK_BEGIN });
    try {
      await axios.delete(`/api/v1/sell/${id}`, {
        headers: {
          Authorization: `Bearer ${state.token}`,
        },
      });
      dispatch({ type: DELETE_BOOK_SUCCESS });
    } catch (error) {
      console.log("error: can't delete book");
    }
    clearAlert();
  };

  const updateBook = async (submittedData) => {
    dispatch({ type: UPDATE_BOOK_BEGIN });
    try {
      const { _id } = submittedData;
      await axios.patch(`/api/v1/sell/${_id}`, submittedData, {
        headers: {
          Authorization: `Bearer ${state.token}`,
        },
      });
      dispatch({
        type: UPDATE_BOOK_SUCCESS,
      });
    } catch (error) {}
    clearAlert();
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        displayAlert,
        registerUser,
        loginUser,
        logoutUser,
        updateUser,
        clearValues,
        createBook,
        getAllSell,
        setUpdateSell,
        deleteBook,
        getOwnedBook,
        chooseBook,
        updateBook,
        deleteBook,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, initialState, useAppContext };
