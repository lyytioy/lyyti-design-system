import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMessagesBubbleSquareAdd = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".messages-bubble-square-add_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle
      className="messages-bubble-square-add_svg__a"
      cx={17.25}
      cy={17.25}
      r={6}
    />,
    <path
      className="messages-bubble-square-add_svg__a"
      d="M17.25 14.25v6M14.25 17.25h6M8.223 19.9L3.75 23.25v-4.5h-1.5a1.5 1.5 0 01-1.5-1.5v-15a1.5 1.5 0 011.5-1.5h19.5a1.5 1.5 0 011.5 1.5v7.5"
    />
  );

export default SvgMessagesBubbleSquareAdd;
