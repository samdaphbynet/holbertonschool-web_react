import React from "react";
import ReactDOM from "react-dom";
import App from "./App/App";
import {createStore} from "redux";
import {Provider} from "react-redux";
import uiReducer from "./reducers/uiReducer"

const store = createStore(uiReducer);

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("root")
);