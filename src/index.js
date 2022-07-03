import React from 'react';
import ReactDOM from "react-dom";
import App from "./App";
import {Provider} from "react-redux";
import store from "./components/store.js";
import Detail from "./components/Detail";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
ReactDOM.render(
<Router>
<Provider store={store}>

<Routes>
    <Route path="/" element={<App />}></Route>
      <Route path="/detail/:countryName" element={<Detail />}></Route>
    </Routes>
</Provider>
</Router>
, document.getElementById("root"));
