import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMessagesBubbleWarningTriangle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".messages-bubble-warning-triangle_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="messages-bubble-warning-triangle_svg__a"
      d="M22.986 13.6A10.5 10.5 0 102.25 11.25a10.43 10.43 0 001.583 5.525L.75 23.25l6.474-3.083c.267.165.54.319.822.461M17.25 20.25a.375.375 0 10.375.375.375.375 0 00-.375-.375M17.25 18v-3"
    />,
    <path
      className="messages-bubble-warning-triangle_svg__a"
      d="M23.062 20.682a1.773 1.773 0 01-1.586 2.568h-8.452a1.774 1.774 0 01-1.587-2.568l4.226-8.451a1.774 1.774 0 013.174 0z"
    />
  );

export default SvgMessagesBubbleWarningTriangle;
