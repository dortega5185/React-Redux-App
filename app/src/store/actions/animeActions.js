import axios from "axios";
// thunks

export const FETCH_QUOTE_START = "FETCH_QUOTE_START";
export const FETCH_QUOTE_FAILURE = "FETCH_QUOTE_FAILURE";
export const FETCH_QUOTE_SUCCESS = "FETCH_QUOTE_SUCCESS";

// Redux is synchronous
// we need to perform an async operation
export const fetchAnime = (name) => {
  return (dispatch) => {
    dispatch({ type: FETCH_QUOTE_START });
    axios
      .get(`https://api.jikan.moe/v3/search/anime?q=${name}`)
      .then((res) => {
        console.log("API DATA", res);
        // res.data.image
        dispatch({ type: FETCH_QUOTE_SUCCESS, payload: res.data.results });
      })
      .catch((err) => {
        // message: err.response.data
        // status: err.response.status
        dispatch({
          type: FETCH_QUOTE_FAILURE,
          payload: `Error${err}`,
        });
      });
  };
};
