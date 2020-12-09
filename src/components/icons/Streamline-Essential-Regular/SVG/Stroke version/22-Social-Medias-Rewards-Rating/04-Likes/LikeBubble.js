import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLikeBubble = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".like-bubble_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="like-bubble_svg__a"
      d="M23.25 12a3.751 3.751 0 00-2.618-3.576 3.75 3.75 0 00-5.056-5.056 3.751 3.751 0 00-7.152 0 3.75 3.75 0 00-5.056 5.056 3.751 3.751 0 000 7.152 3.75 3.75 0 005.056 5.056 3.751 3.751 0 007.152 0 3.75 3.75 0 005.056-5.056A3.752 3.752 0 0023.25 12z"
    />,
    <path
      className="like-bubble_svg__a"
      d="M6.75 15.8v-4.9h.7a3.5 3.5 0 003.5-3.5 1.4 1.4 0 011.4-1.4 1.9 1.9 0 011.9 1.9v.9a.7.7 0 00.7.7h.2a2.1 2.1 0 012.089 2.309l-.217 2.17a2.8 2.8 0 01-2.786 2.521h-2.894a2.779 2.779 0 01-.769-.108l-1.7-.484a2.779 2.779 0 00-.769-.108H6.75"
    />
  );

export default SvgLikeBubble;
