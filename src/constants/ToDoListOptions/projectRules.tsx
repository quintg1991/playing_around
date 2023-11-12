import React from "react";
import { ListItem } from "../../types";

export const projectRules: ListItem = {
  heading: "Project Rules",
  subheading:
    "A set of rules that are followed by this project in order to better simulate working in a professional development environment",
  contents: (
    <ul>
      <li>Setup must be analagous to a work environment</li>
      <li>Must follow bulletproof react folder structure</li>
      <li>Only styling libraries in bootstrap and react bootstrap</li>
      <li>
        Only use 3rd party apps when necessary
        <ul>
          <li>
            3rd party libraries must be widely used and actively maintained
          </li>
        </ul>
      </li>
      <li>
        The keyword <code>any</code> should only be used as a last resort to ensure type safety
        <ul>
          <li>
            If <code>any</code> is used, the code must be documented with an
            explanation explaining the need for its use
          </li>
        </ul>
      </li>
    </ul>
  ),
};
