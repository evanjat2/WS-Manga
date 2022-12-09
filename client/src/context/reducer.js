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
  CREATE_BOOK_BEGIN,
  CREATE_BOOK_SUCCESS,
  CREATE_BOOK_ERROR,
  GET_SELL_BEGIN,
  GET_SELL_SUCCESS,
  UPDATE_BOOK_BEGIN,
  UPDATE_BOOK_SUCCESS,
  UPDATE_BOOK_ERROR,
  SET_UPDATE_SELL,
  DELETE_BOOK_BEGIN,
  DELETE_BOOK_SUCCESS,
  DELETE_BOOK_ERROR,
  GET_OWNED_BOOK_SUCCESS,
  CHOOSE_BOOK,
  CREATE_WISH_BEGIN,
  CREATE_WISH_SUCCESS,
  CREATE_WISH_ERROR,
  GET_WISHES_BEGIN,
  GET_WISHES_SUCCESS,
  SET_UPDATE_WISH,
  UPDATE_WISH_BEGIN,
  UPDATE_WISH_SUCCESS,
  UPDATE_WISH_ERROR,
  DELETE_WISH_BEGIN,
  DELETE_WISH_SUCCESS,
  DELETE_WISH_ERROR,
  GET_OWNED_WISHES_SUCCESS,
  CHOOSE_WISH,
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
  if (action.type === CLEAR_VALUES) {
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
    };
  }
  if (action.type === CREATE_BOOK_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type === CREATE_BOOK_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "success",
      alertText: "Berhasil menambah buku!",
    };
  }
  if (action.type === CREATE_BOOK_ERROR) {
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

  if (action.type === GET_OWNED_BOOK_SUCCESS) {
    return {
      ...state,
      ownedBook: action.payload.data.book,
      showAlert: true,
      alertType: "danger",
    };
  }

  if (action.type === SET_UPDATE_SELL) {
    const book = action.payload.data.book.find(
      (book) => book.id === action.payload.id
    );
    const { _id, judul, pengarang, detail, urlGambar } = book;
    return {
      ...state,
      isEditing: true,
      editBookId: _id,
      judul,
      pengarang,
      detail,
      urlGambar,
    };
  }
  if (action.type === UPDATE_BOOK_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type === UPDATE_BOOK_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "success",
      alertText: "Berhasil Meng-update buku!",
    };
  }
  if (action.type === UPDATE_BOOK_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertText: action.payload.msg,
    };
  }
  if (action.type === DELETE_BOOK_BEGIN) {
    return { ...state, isLoading: true };
  }

  if (action.type === DELETE_BOOK_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "success",
      alertText: "Berhasil menghapus buku!",
    };
  }

  if (action.type === CHOOSE_BOOK) {
    return { ...state, choosedBook: action.payload.book };
  }
  if (action.type === CREATE_WISH_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type === CREATE_WISH_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "success",
      alertText: "Berhasil menambah item wish!",
    };
  }
  if (action.type === CREATE_WISH_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertText: action.payload.msg,
    };
  }
  if (action.type === GET_WISHES_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type === GET_WISHES_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      sell: action.payload.data,
    };
  }

  if (action.type === GET_OWNED_WISHES_SUCCESS) {
    return {
      ...state,
      ownWishes: action.payload.data.wishes,
      showAlert: true,
      alertType: "danger",
    };
  }

  if (action.type === SET_UPDATE_WISH) {
    const wish = action.payload.data.wishes.find(
      (wish) => wish.id === action.payload.id
    );
    const { _id, judul, pengarang, detail, urlGambar } = wish;
    return {
      ...state,
      isEditing: true,
      editBookId: _id,
      judul,
      pengarang,
      detail,
      urlGambar,
    };
  }
  if (action.type === UPDATE_WISH_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type === UPDATE_WISH_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "success",
      alertText: "Berhasil Meng-update item wish!",
    };
  }
  if (action.type === UPDATE_WISH_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertText: action.payload.msg,
    };
  }
  if (action.type === DELETE_WISH_BEGIN) {
    return { ...state, isLoading: true };
  }

  if (action.type === DELETE_WISH_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "success",
      alertText: "Berhasil menghapus buku!",
    };
  }

  if (action.type === CHOOSE_WISH) {
    return { ...state, choosedWish: action.payload.wishes };
  }
  throw new Error(`no such action: ${action.type}`);
};

export default reducer;
