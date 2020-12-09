import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMessagesBubbleSquareCheck = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".messages-bubble-square-check_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="messages-bubble-square-check_svg__a"
      d="M23.249 17.25a6 6 0 11-6-6M23.249 12.75l-5.47 5.469a.75.75 0 01-1.061 0L15 16.5"
    />,
    <path
      className="messages-bubble-square-check_svg__a"
      d="M8.223 19.9L3.75 23.25v-4.5h-1.5a1.5 1.5 0 01-1.5-1.5v-15a1.5 1.5 0 011.5-1.5h19.5a1.5 1.5 0 011.5 1.5v7.5"
    />
  );

export default SvgMessagesBubbleSquareCheck;
