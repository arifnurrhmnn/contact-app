import { GET, ADD, DETAIL, UPDATE, DELETE } from "./type";

const initialState = {
  getContactLoading: false,
  getContactResult: false,
  getContactError: false,

  addContactLoading: false,
  addContactResult: false,
  addContactError: false,

  detailContactResult: false,

  updateContactLoading: false,
  updateContactResult: false,
  updateContactError: false,

  deleteContactLoading: false,
  deleteContactError: false,
  deleteContactResult: false,
};

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET:
      return {
        ...state,
        getContactLoading: action.payload.loading,
        getContactResult: action.payload.data,
        getContactError: action.payload.error,
      };
    case ADD:
      return {
        ...state,
        addContactLoading: action.payload.loading,
        addContactResult: action.payload.data,
        addContactError: action.payload.error,
      };
    case DETAIL:
      return {
        ...state,
        detailContactResult: action.payload.data,
      };
    case UPDATE:
      return {
        ...state,
        updateContactLoading: action.payload.loading,
        updateContactResult: action.payload.data,
        updateContactError: action.payload.error,
      };
    case DELETE:
      return {
        ...state,
        deleteContactLoading: action.payload.loading,
        deleteContactResult: action.payload.data,
        deleteContactError: action.payload.error,
      };
    default:
      return state;
  }
};

export default contactReducer;
