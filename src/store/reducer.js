import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import counterReducer from "./modules/counter/reducer";

const rootReducer = combineReducers({
  counter: counterReducer,
});

export const rootReducerWithRouter = (history) => {
  return combineReducers({
    ...rootReducer,
    router: connectRouter(history),
  });
};

export default rootReducer;
