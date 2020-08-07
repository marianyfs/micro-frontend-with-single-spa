/** ****************************************************************************
 * Copyright (c) 2020 - Fundação CERTI
 * All rights reserved.
 **************************************************************************** */

import React from "react";

import { render, fireEvent } from "@testing-library/react";

import Button from "../../../components/atoms/Button";

describe("Test Button Atom", () => {
  it("Should render Button", () => {
    const { getByTestId } = render(<Button data-testid="button-default" />);

    const buttonNode = getByTestId("button-default");
    expect(buttonNode).toBeInTheDocument();
    expect(buttonNode.getAttribute("disabled")).toBe(null);
  });

  it("Should render disabled Button", () => {
    const props = {
      disabled: true,
    };

    const { getByTestId } = render(
      <Button data-testid="button-default" {...props} />
    );

    const buttonNode = getByTestId("button-default");
    expect(buttonNode).toBeInTheDocument();
    expect(buttonNode.closest("button")).toBeDisabled();
  });

  it("Should render Button with classes", () => {
    const props = {
      classes: "m-4 text-dark bg-info",
    };

    const { getByTestId } = render(
      <Button data-testid="button-default" {...props} />
    );

    const buttonNode = getByTestId("button-default");
    expect(buttonNode).toBeInTheDocument();
    expect(buttonNode).toHaveClass("btn m-4 text-dark bg-info");
  });

  it("Should render Button and handle on click", () => {
    const onClickMock = jest.fn();

    const { getByTestId } = render(
      <Button data-testid="button-default" onClick={onClickMock} />
    );

    const buttonNode = getByTestId("button-default");
    fireEvent.click(buttonNode);
    expect(onClickMock).toBeCalled();
  });

  it("Should render disabled Button and not call function on click", () => {
    const onClickMock = jest.fn();

    const { getByTestId } = render(
      <Button data-testid="button-default" disabled onClick={onClickMock} />
    );

    const buttonNode = getByTestId("button-default");
    fireEvent.click(buttonNode);
    expect(onClickMock).not.toBeCalled();
  });
});
