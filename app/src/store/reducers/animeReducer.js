const initialState = {
  image: "",
  isFetching: false,
  error: "",
};

export const animeReducer = (state = initialState, action) => {
  console.log("inside reducer", { state, action });
  switch (action.type) {
    case "FETCH_QUOTE_START":
      return {
        ...state,
        isFetching: true,
      };
    case "FETCH_QUOTE_SUCCESS":
      console.log("action.payload", action.payload);
      return {
        ...state,
        isFetching: false,
        image: [action.payload.map((img) => img.image_url)],
        error: "",
      };
    case "FETCH_QUOTE_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
