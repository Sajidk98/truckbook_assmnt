import React, { useEffect } from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import { ThemeProvider } from "@material-ui/styles";

// import thunk from "redux-thunk";

import reducers from "./reducers";
import saga from "./saga";
import type from "./actions/constant";
import Routes from "./routes";
import theme from "./theme";

// const store = createStore(reducers, applyMiddleware(thunk)); // for thunk middle ware
const sagaMiddleWare = createSagaMiddleware(); // for saga
const reduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleWare),
  reduxDevTools
);

sagaMiddleWare.run(saga);

const App = () => {
  useEffect(() => {
    store.dispatch({ type: type.GET_GENRE_REQUEST });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Routes />
      </Provider>
    </ThemeProvider>
  );
};

export default App;
