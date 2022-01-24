import { GET, ADD, DETAIL, UPDATE, DELETE } from "./type";
import axios from "axios";

const apiUrl = "https://api-contact-app-jack.herokuapp.com/contacts/";

export const getContact = () => {
  return (dispatch) => {
    // Loading
    dispatch({
      type: GET,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });
    // Get API
    axios
      .get(apiUrl)
      .then((response) => {
        dispatch({
          type: GET,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: GET,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const addContact = (data) => {
  return (dispatch) => {
    // Loading
    dispatch({
      type: ADD,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });
    // Get API
    axios
      .post(apiUrl, data)
      .then((response) => {
        dispatch({
          type: ADD,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: ADD,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const detailContact = (data) => {
  return (dispatch) => {
    dispatch({
      type: DETAIL,
      payload: {
        data: data,
      },
    });
  };
};

export const updateContact = (data) => {
  return (dispatch) => {
    // Loading
    dispatch({
      type: UPDATE,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });
    // Get API
    axios
      .put(apiUrl + data.id, data)
      .then((response) => {
        dispatch({
          type: UPDATE,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: UPDATE,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const deleteContact = (id) => {
  return (dispatch) => {
    // Loading
    dispatch({
      type: DELETE,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });
    // Get API
    axios
      .delete(apiUrl + id)
      .then((response) => {
        dispatch({
          type: DELETE,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: DELETE,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};
