import React from "react";

import { Card } from "@myf/styleguide";

export default function Root(props) {
  return (
    <Card className="m-2 p-4">
      <h3> APP 2 </h3>
      <p>{props.name} is mounted!</p>
    </Card>
  );
}
