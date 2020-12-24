import React from "react";
import "./styles.css";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./components/Home";
import PokemonList from "./components/PokemonList";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/pokemon" component={PokemonList} />
        </Switch>
      </Router>
    </div>
  );
}
