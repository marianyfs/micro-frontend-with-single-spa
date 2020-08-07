/** ****************************************************************************
 * Copyright (c) 2020 - Fundação CERTI
 * All rights reserved.
 **************************************************************************** */

import React from "react";
import { string, element } from "prop-types";

import { Button as BootstrapButton } from "react-bootstrap";

import classnames from "classnames";
import styled from "styled-components";

const StyledButton = styled(BootstrapButton)`
  border-radius: 100px;
  font-size: 12px;
  padding: 20px 30px;
`;

const Button = ({ children, classes, ...props }) => (
  <StyledButton
    className={classnames("text-uppercase font-weight-bolder", classes)}
    {...props}
  >
    {children}
  </StyledButton>
);

Button.defaultProps = {
  classes: "",
  children: undefined,
};

Button.propTypes = {
  classes: string,
  children: element,
};

export default Button;
