import { DEV_API_URL } from "../../config";

export const fetchPokemon = (page) => {
  return (dispatch) => {
    const offset = (page - 1) * 20;
    fetch(`${DEV_API_URL}/pokemon?offset=${offset}&limit=20`)
      .then((res) => res.json())
      .then((data) =>
        dispatch({ type: "FETCH_POKEMON_SUCCESS", payload: data.results })
      );
  };
};
