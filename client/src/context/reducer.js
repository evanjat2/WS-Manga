import {
  DISPLAY_ALERT,
  CLEAR_ALERT,
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
  UPDATE_SELL_BEGIN,
  UPDATE_SELL_SUCCESS,
  UPDATE_SELL_ERROR,
  SET_UPDATE_SELL,
  DELETE_SELL_BEGIN,
  DELETE_SELL_SUCCESS,
  DELETE_SELL_ERROR
} from "./actions";

import { initialState } from "./appContext";

const reducer = (state, action) => {
  if (action.type === DISPLAY_ALERT) {
    return {
      ...state,
      showAlert: true,
      alertType: "danger",
      alertText: "Please provide all values",
    };
  }
  if (action.type === CLEAR_ALERT) {
    return {
      ...state,
      showAlert: false,
      alertType: "",
      alertText: "",
    };
  }
  if (action.type === REGISTER_USER_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type === REGISTER_USER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      token: action.payload.token,
      user: action.payload.user,
      showAlert: true,
      alertType: "success",
      alertText: "User Created! Redirecting...",
    };
  }
  if (action.type === REGISTER_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertText: action.payload.msg,
    };
  }

  if (action.type === LOGIN_USER_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type === LOGIN_USER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      token: action.payload.token,
      user: action.payload.user,
      showAlert: true,
      alertType: "success",
      alertText: "Login Successful! Redirecting...",
    };
  }
  if (action.type === LOGIN_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertText: action.payload.msg,
    };
  }
  if (action.type === LOGOUT_USER) {
    return {
      ...initialState,
      user: null,
      token: null,
    };
  }
  if (action.type === UPDATE_USER_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type === UPDATE_USER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      token: action.payload.token,
      user: action.payload.user,
      showAlert: true,
      alertType: "success",
      alertText: "User Profile Updated!",
    };
  }
  if (action.type === UPDATE_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertText: action.payload.msg,
    };
  }
  if (action.type === CLEAR_VALUES){
    const initialState = {
      isEditing: false,
      editBookId: "",
      judul: "",
      detail: "",
      pengarang: "",
      istoSell: "",
      owner: "",
    };
    return {
      ...state,
      ...initialState,
    }
  }
  if (action.type === CREATE_SELL_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type === CREATE_SELL_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "success",
      alertText: "Berhasil menambah buku!",
    };
  }
  if (action.type === CREATE_SELL_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertText: action.payload.msg,
    };
  }
  if (action.type === GET_SELL_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type === GET_SELL_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      sell: action.payload.data,
    };
  }
  if (action.type === SET_UPDATE_SELL){
    const book = action.payload.data.book.find((book) => book.id === action.payload.id);
    const { _id, judul, pengarang, detail, urlGambar} = book;
    return {
      ...state,
      isEditing: true, 
      editBookId: _id,
      judul, 
      pengarang,
      detail,
      urlGambar
    };
  }
  if (action.type === UPDATE_SELL_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type === UPDATE_SELL_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      token: action.payload.token,
      user: action.payload.user,
      showAlert: true,
      alertType: "success",
      alertText: "Berhasil Meng-update buku!",
    };
  }
  if (action.type === UPDATE_SELL_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertText: action.payload.msg,
    };
  }
  if (action.type === DELETE_JOB_BEGIN) {
    return { ...state, isLoading: true };
  }
  throw new Error(`no such action: ${action.type}`);
};

export default reducer;
