import React from "react";

import { Card } from "@myf/styleguide";

const ModuleError = ({ error, info }) => {
  return (
    <Card className="m-2 p-4 bg-danger">
      <h3> Erro no módulo </h3>
      <small>{error}</small>
      <small>{info}</small>
    </Card>
  );
};

export default ModuleError;
