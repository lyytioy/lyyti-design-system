import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMessagesBubbleSquareWarningTriangle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".messages-bubble-square-warning-triangle_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="messages-bubble-square-warning-triangle_svg__a"
      d="M8.223 19.9L3.75 23.25v-4.5h-1.5a1.5 1.5 0 01-1.5-1.5v-15a1.5 1.5 0 011.5-1.5h19.5a1.5 1.5 0 011.5 1.5v10.5M17.25 20.25a.375.375 0 10.375.375.375.375 0 00-.375-.375M17.25 18v-3"
    />,
    <path
      className="messages-bubble-square-warning-triangle_svg__a"
      d="M23.063 20.682a1.774 1.774 0 01-1.587 2.568h-8.452a1.774 1.774 0 01-1.587-2.568l4.226-8.451a1.774 1.774 0 013.174 0z"
    />
  );

export default SvgMessagesBubbleSquareWarningTriangle;
