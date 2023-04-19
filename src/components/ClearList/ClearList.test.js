// ## Task 2

// - Create a file named `ClearList.test.js` within the `ClearList` component folder.
// - Write a test that verifies that the `ClearList` component shows the user a button containing the value of the `buttonText` prop.
// - If you're unsure of what value to provide for the `clearList` prop (within the test), you can use `jest.fn()` (https://jestjs.io/docs/mock-function-api), which produces a special function from Jest.

import React from "react";
import { test, expect } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ClearList from "./index.js";



const testProps = {
    buttonText: "Clear List"
}

// test("AddItem component shows the user an input with label 'Add item:'", () => {
//     render(< AddItem {...testProps}/>)
//     const input = screen.getByLabelText("Add item:");
//     expect(input).toBeInTheDocument();
// });

test("ClearList component shows the user a button containing the value of the buttonText prop", () => {
    // render(< ClearList buttonText="Incorrect"/>) - a render to show the test can fail
    render(< ClearList {...testProps}/>)
    const button = screen.getByText(testProps.buttonText);
    expect(button).toBeInTheDocument();
});
