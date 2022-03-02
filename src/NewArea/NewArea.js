import React from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import { Posts } from "./Posts";

export const NewArea = () => {
  return (
    <div>
      <Switch>
        {/* <NavLink to="/posts">posts...</NavLink> */}

        <Route exact path="/posts" render={() => <Posts />} />
      </Switch>
    </div>
  );
};
