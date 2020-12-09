import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMessagesBubbleSquareText = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".messages-bubble-square-text_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="messages-bubble-square-text_svg__a"
      d="M23.5 17a1 1 0 01-1 1h-11l-4 4v-4h-6a1 1 0 01-1-1V3a1 1 0 011-1h21a1 1 0 011 1zM5.5 12h13M5.5 7h13"
    />
  );

export default SvgMessagesBubbleSquareText;
