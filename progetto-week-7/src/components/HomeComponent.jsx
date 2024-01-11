import React, { Component } from "react";
import OptionsComponent from "./OptionsComponent";
import CentralComponent from "./CentralComponent";

export default class HomeComponent extends Component {
  render() {
    return (
      <>
        <main>
          <OptionsComponent />
          <CentralComponent />
        </main>
      </>
    );
  }
}
