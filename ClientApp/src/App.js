import React, { Component } from "react";
import { Route } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./components/Home";
import { FetchData } from "./components/FetchData";
import { Counter } from "./components/Counter";
import { Create } from "./components/Trips/Create";
import { Delete } from "./components/Trips/Delete";
import { Trips } from "./components/Trips/Trips";
import { Update } from "./components/Trips/Update";
import Profile from "./components/profile";
import "./custom.css";

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <Layout>
        <Route exact path="/" component={Home} />
        <Route path="/counter" component={Counter} />
        <Route path="/fetch-data" component={FetchData} />
        <Route path="/create" component={Create} />
        <Route path="/Update/:id" component={Update} />
        <Route path="/Delete/:id" component={Delete} />
        <Route path="/trips" component={Trips} />
        <Route path="/profile" component={Profile} />
      </Layout>
    );
  }
}
