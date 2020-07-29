import "./set-public-path";
import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import Root from "./root.component";

import { ModuleError } from "@myf/styleguide";

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Root,
  errorBoundary(error, info, props) {
    return <ModuleError error={error} info={info} {...props} />;
  },
});

export const { bootstrap, mount, unmount } = lifecycles;
