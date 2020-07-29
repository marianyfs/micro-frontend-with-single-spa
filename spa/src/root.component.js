import React from "react";

import { Nav } from "@myf/styleguide";

export default function Root() {
  return (
    <Nav>
      <Nav.Item>
        <Nav.Link href="/">App1</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/app2">App2</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}
