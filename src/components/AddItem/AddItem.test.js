// The below is Arshi's plan from the lecture

// High level goal: write a test that verifies the input works
// Tools: Jest, React testing library, User event
// Three As: arrange, act, assert
//    import the stuff from Jest
//        test -> help us write a test
//        expect -> help us perform assertions/comparisons
// import { test, expect } from "@jest/globals";

//    import the stuff from React testing library
//        render -> render the component (attach it to the DOM)
//        screen -> object from RTL that helps us find elements
// import { render, screen } from "@testing-library/react";

// import user event
//      help us perform actions against elements (e.g. clicking, typing, etc)
// import userEvent from "@testing-library/user-event";

//    import component that we're testing
//        App component
// import App from "./App.js";

// test skeleton
//    3 As:
//      Arrange:
//        render the component that we're testing
//          any props?

// screen.debug(); // prints html to the terminal
// screen.logTestingPlaygroundURL(); // copy-paste url into browser

//      Act:
//        what are the user interactions that we want to do here?
//        select the input
//            for specific query, check out the documention to know which way to use!

//        type into the input
//            "fire" from docs (simulates user writing into input)
//            can use userEvent (see examples from documentation)
//            for example: userEvent.type to type somethin

//      Assert
//        when a piece of text goes into the input, the input contains it

import React from "react";
import { test, expect } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AddItem from "./index.js";

const testProps = {
    addToList: "this should be added to the list",
    buttonText: "Add To List"
}

test("AddItem component shows the user an input with label 'Add item:'", () => {
    render(< AddItem {...testProps}/>)
    const input = screen.getByLabelText("Add item:");
    expect(input).toBeInTheDocument();
});

test("AddItem component shows the user a button containing the value of the buttonText prop", () => {
    render(< AddItem {...testProps}/>)
    const button = screen.getByText(testProps.buttonText);
    expect(button).toBeInTheDocument();
});




