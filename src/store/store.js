import { configureStore } from "@reduxjs/toolkit";
import { routerMiddleware } from "connected-react-router";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";

import { rootReducerWithRouter } from "./reducer";
import rootSaga from "./saga";

const isDevMode = process.env.NODE_ENV === "development";

export const createStore = (preloadedState = {}, history) => {
  const sagaMiddleware = createSagaMiddleware();

  // Create the store with two middlewares
  // 1. sagaMiddleware: Makes redux-sagas work
  // 2. routerMiddleware: Syncs the location/URL path to the state
  // 3. logger: to log actions and store state to console output
  const middlewares = [sagaMiddleware, routerMiddleware(history)];

  if (isDevMode) middlewares.push(logger);

  const getMiddlewares = (getDefaultMiddleware) => [
    // 1. Disabling redux-thunk under the hood because we're using redux-saga here
    // 2. Setting => { thunk: false } will throw errors in case of asynchronous actions
    ...getDefaultMiddleware({ thunk: false }),
    ...middlewares,
  ];

  const store = configureStore({
    middleware: getMiddlewares,
    reducer: rootReducerWithRouter(history),
    devTools: isDevMode,
    preloadedState,
  });

  sagaMiddleware.run(rootSaga);

  return store;
};
