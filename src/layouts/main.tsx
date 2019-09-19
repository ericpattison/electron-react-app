import * as React from "react";
import * as ReactDom from "react-dom";

window.onload = () => {
    ReactDom.render(
        <h1>Hello, Electron React App</h1>
    , document.getElementById("main"));
};
