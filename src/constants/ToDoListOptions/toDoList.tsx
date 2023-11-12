import { ListItem } from "types";

export const toDoList: ListItem = {
  heading: "TODO",
  subheading:
    "An evolving list of current items that need ot be worked on in the application",
  contents: (
    <ul>
      <li>Finish setting up vite</li>
      <li>Set up vitest</li>
      <li>Getting started with zustand as an alternative to react redux</li>
      <li>Set up EsLint</li>
      <li>Get styles working with sass</li>
      <li>Find a simple publically available api to test with</li>
      <li>README creation</li>
      <li>style it up</li>
    </ul>
  ),
};
