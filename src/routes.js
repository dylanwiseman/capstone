import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import LeaderBoard from "./LeaderBoard";

export default function routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/leaderboard" component={LeaderBoard} />
    </Switch>
  );
}
