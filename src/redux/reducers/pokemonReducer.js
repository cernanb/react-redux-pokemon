export default (state = { all: [], loading: false, page: 1 }, action) => {
  switch (action.type) {
    case "FETCH_POKEMON_SUCCESS":
      return { ...state, all: action.payload };
    case "TOGGLE_LOADING":
      return { ...state, loading: !state.loading };
    default:
      return state;
  }
};
