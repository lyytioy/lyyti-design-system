import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMessagesBubbleSquareSmile = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".messages-bubble-square-smile_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="messages-bubble-square-smile_svg__a"
      d="M23.543 17.5a1 1 0 01-1 1h-11l-4 4v-4h-6a1 1 0 01-1-1v-15a1 1 0 011-1h21a1 1 0 011 1zM6.543 7.5a2 2 0 014 0M17.543 7.5a2 2 0 00-4 0M14.543 11a2.5 2.5 0 01-5 0"
    />
  );

export default SvgMessagesBubbleSquareSmile;
