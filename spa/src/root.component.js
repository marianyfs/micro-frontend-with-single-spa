import React from "react";

export default function Root(props) {
  return (
    <section>
      {props.name} is mounted!
      <div id="microfrontend-apps"></div>
    </section>
  );
}
