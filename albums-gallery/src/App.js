import logo from './logo.svg';
import './App.css';
import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import AlbumsGallery from "./pages/AlbumsGallery";
import Login from "./pages/Login";

const App = () => {
  return (
    <Switch>
      <Route path="/gallery" exact> {/*consists search componnet && add albums link*/}
        <AlbumsGallery />
      </Route>
      <Route path="/" exact>
        <Login />
      </Route>
    </Switch>
  );
}

export default App;
