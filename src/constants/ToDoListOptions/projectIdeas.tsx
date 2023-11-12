import { ListItem } from "types";

export const projectIdeas: ListItem = {
  heading: "Project Ideas ",
  subheading: "Brainstormed ideas to fill out the content of this application",
  contents: (
    <ul>
      <li>
        Curent equipment I'm using
        <ul>
          <li>
            I'm a tech nerd, I have too many keyboards and mice. Make sure to
            include pics and costs to shame myself for how much money I've
            spent.
          </li>
        </ul>
      </li>
      <li>
        Useful addons for VSCode
        <ul>
          <li>
            Auto Close Tag: automatically generate a closing tag for HTML
            elements, JSX elements, and components
          </li>
          <li>
            Auto rename tag: automatically rename a closing tag when the opening
            tag is changed
          </li>
          <li>ES7+ snippets: useful React code snippets</li>
          <li>
            Material Icon Theme & Monokai Pro: preferred icon and color theme
          </li>
          <li>Prettier: easily format code</li>
          <li>
            Simple Reasme: a simple readme generator with prebuilt templates
          </li>
          <li>
            generates a barrel `index.ts` file with all the module exports from
            the current directory
          </li>
        </ul>
      </li>
    </ul>
  ),
};
