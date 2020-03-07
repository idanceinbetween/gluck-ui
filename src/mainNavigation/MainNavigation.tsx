import React from "react";
import { Link } from "react-router-dom";
const logo = require("./assets/logo.png");

export function MainNavigation() {
  return (
    <nav role={"navigation"}>
      <img alt={"logo"} src={String(logo)} />
      <div>glūck</div>
      <div>All Gifts</div>
      <div>
        <Link to={"/about"}>About</Link>
      </div>
      <div>Add A Gift</div>
      <div>My Exchanges</div>
      <div>My Account</div>
    </nav>
  );
}
