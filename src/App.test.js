import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { createMemoryHistory } from "history";
import { ConnectedRouter } from "connected-react-router";

import { createStore } from "./store/store";
import App from "./App";

const history = createMemoryHistory();
const store = createStore({}, history);

test("renders learn react link", () => {
  const { getByText } = render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>
  );

  expect(getByText(/Home page/i)).toBeInTheDocument();
});
