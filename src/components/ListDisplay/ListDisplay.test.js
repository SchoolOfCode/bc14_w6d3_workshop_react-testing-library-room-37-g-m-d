import React from "react";
import {expect, test} from '@jest/globals';
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ListDisplay from "./index.js";




// test("AddItem component shows the user an input with label 'Add item:'", () => {
//     render(< AddItem {...testProps}/>)
//     const input = screen.getByLabelText("Add item:");
//     expect(input).toBeInTheDocument();
// });



test("Test if the list is empty", () => {
   const mockTickItem = jest.fn()
   const testList = [
     {id: 1, name: "itemOne", completed:false},
     {id: 2, name: "itemTwo", completed:true},
     {id: 3, name: "itemThree", completed:false}
   ]

    render(< ListDisplay list = {testList} tickItem = {mockTickItem}/>)
    const listItems = screen.getAllByRole("listitem");
    expect(listItems).toHaveLength(testList.length);
    expect(screen.getByRole("list")).toBeInTheDocument();
});

