import { ListItem } from "types";

export const wishlist: ListItem = {
  heading: "Wishlist",
  subheading:
    "A list of goals to achieve during the course of developing the application",
  contents: (
    <ul>
      <li>
        <span>
          Gain an understanding of alternatives to react redux (in this case,
          zustand).
        </span>
        <ul>
          <li>How it differs from react context api</li>
          <li>
            Identify use cases where a third party tool would be preferable to
            context api
          </li>
        </ul>
      </li>
      <li>Look into better ways to approach api calls</li>
      <li>Learn how to use React Suspense introduced in React 18</li>
      <li>Learn more about GraphQL</li>
    </ul>
  ),
};
