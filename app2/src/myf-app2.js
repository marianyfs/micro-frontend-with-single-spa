import "./set-public-path";
import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import Root from "./root.component";

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Root,
  domElementGetter,
  errorBoundary(err, info, props) {
    // Customize the root error boundary for your microfrontend here.
    return null;
  },
});

function domElementGetter() {
  let element = document.getElementById("micro-frontend-apps");
  if (!element) {
    element = document.createElement("div");
    element.id = "myf-app2";
    document.body.appendChild(element);
  }
  return element;
}

export const { bootstrap, mount, unmount } = lifecycles;
