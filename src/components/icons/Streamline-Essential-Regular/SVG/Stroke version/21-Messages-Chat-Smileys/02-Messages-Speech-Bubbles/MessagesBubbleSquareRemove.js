import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMessagesBubbleSquareRemove = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".messages-bubble-square-remove_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle
      className="messages-bubble-square-remove_svg__a"
      cx={17.249}
      cy={17.25}
      r={6}
    />,
    <path
      className="messages-bubble-square-remove_svg__a"
      d="M19.499 15l-4.5 4.5M14.999 15l4.5 4.5M8.223 19.9L3.75 23.25v-4.5h-1.5a1.5 1.5 0 01-1.5-1.5v-15a1.5 1.5 0 011.5-1.5h19.5a1.5 1.5 0 011.5 1.5v7.5"
    />
  );

export default SvgMessagesBubbleSquareRemove;
