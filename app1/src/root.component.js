import React from "react";

import { Card, Button } from "@myf/styleguide";

export default function Root(props) {
  return (
    <Card className="m-2 p-4">
      <h3> APP 1 </h3>
      <p>{props.name} is mounted!</p>
      <Button href="https://github.com/MarianyFerreira/micro-frontend-with-single-spa">
        Repository
      </Button>
    </Card>
  );
}
