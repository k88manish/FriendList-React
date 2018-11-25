import React, { Component } from "react";
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";

import FriendListApp from "./FriendListApp";
import * as reducers from "../reducers";

const reducer = combineReducers(reducers);
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <FriendListApp />
        </Provider>
      </div>
    );
  }
}
