import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import pokemonReducer from "./reducers/pokemonReducer";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  pokemon: pokemonReducer
});
const store = createStore(
  rootReducer,
  /* preloadedState, */ composeEnhancers(applyMiddleware(thunk))
);

export default store;
