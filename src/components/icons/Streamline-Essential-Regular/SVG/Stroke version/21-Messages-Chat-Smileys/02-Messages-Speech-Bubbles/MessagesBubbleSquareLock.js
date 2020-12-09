import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMessagesBubbleSquareLock = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".messages-bubble-square-lock_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="messages-bubble-square-lock_svg__a"
      d="M14.25 21.75a1.5 1.5 0 001.5 1.5M14.25 17.25v4.5M15.75 15.75a1.5 1.5 0 00-1.5 1.5M21.75 15.75h-6M23.25 17.25a1.5 1.5 0 00-1.5-1.5M23.25 21.75v-4.5M21.75 23.25a1.5 1.5 0 001.5-1.5M15.75 23.25h6M18.75 11.25a3 3 0 00-3 3v1.5h6v-1.5a3 3 0 00-3-3zM18.75 19.154a.375.375 0 10.375.375.375.375 0 00-.375-.375"
    />,
    <path
      className="messages-bubble-square-lock_svg__a"
      d="M11.25 18.75h-1.5l-6 4.5v-4.5h-1.5a1.5 1.5 0 01-1.5-1.5v-15a1.5 1.5 0 011.5-1.5h19.5a1.5 1.5 0 011.5 1.5v7.5"
    />
  );

export default SvgMessagesBubbleSquareLock;
