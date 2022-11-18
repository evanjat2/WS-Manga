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
  CREATE_SELL_BEGIN,
  CREATE_SELL_SUCCESS,
  CREATE_SELL_ERROR,
  GET_SELL_BEGIN,
  GET_SELL_SUCCESS,
  SET_UPDATE_SELL,
  UPDATE_SELL_BEGIN,
  UPDATE_SELL_SUCCESS,
  UPDATE_SELL_ERROR,
  DELETE_SELL_BEGIN,
  DELETE_SELL_SUCCESS,
  DELETE_SELL_ERROR
} from "./actions";

const token = localStorage.getItem("token");
const user = localStorage.getItem("user");

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
    console.log(state.token);
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
    dispatch({type: CLEAR_VALUES})
  }

  const createSell = async (submittedData) => {
    dispatch({ type: CREATE_SELL_BEGIN });
    try {
      const { data } = await axios.post("/api/v1/sell", submittedData, {
        headers: {
          Authorization: `Bearer ${state.token}`,
        },
      });
      dispatch({
        type: CREATE_SELL_SUCCESS,
        payload: { data },
      });
      dispatch({type: CLEAR_VALUES})
    } catch (error) {
      dispatch({
        type: CREATE_SELL_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
    clearAlert();
  };

  const getAllSell = async () => {
    dispatch({ type: GET_SELL_BEGIN });
    try {
      const { data } = await axios.get("/api/v1/sell/all");
      // const { book } = data;
      dispatch({
        type: GET_SELL_SUCCESS,
        payload: { data },
      });
    } catch (error) {
      console.log("Error");
    }
    clearAlert();
  };

  const setUpdateSell = (id) => {
    dispatch({ type: SET_UPDATE_SELL, payload: { id } })
  }

  const updateSell = async (submittedData) => {
    dispatch({ type: UPDATE_SELL_BEGIN });
    try {
      const { book } = await axios.patch("/api/v1/sell", submittedData, {
        headers: {
          Authorization: `Bearer ${state.token}`,
        },
      });
      dispatch({
        type: UPDATE_SELL_SUCCESS,
        payload: { book },
      });
      dispatch({type: CLEAR_VALUES})
    } catch (error) {
      dispatch({
        type: UPDATE_SELL_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
    clearAlert();
  }

  const deleteSell = async (id) => {
    dispatch({ type: DELETE_SELL_BEGIN });
  try {
    await axios.delete(`/api/v1/sell/${id}`, {
      headers: {
        Authorization: `Bearer ${state.token}`,
      },
    });
  } catch (error) {
    console.log("error: can't delete sell");
  }
  }

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
        createSell,
        getAllSell,
        setUpdateSell, 
        deleteSell,
        updateSell
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
