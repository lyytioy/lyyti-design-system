import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCursorHand1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cursor-hand-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="cursor-hand-1_svg__a"
      d="M9.5 23.5c-1.5-2-5.417-8.673-5.417-8.673a1.2 1.2 0 011.76-1.6L8.5 15.5V4a1.5 1.5 0 013 0v4.5h2a1 1 0 011 1h2a1 1 0 011 1h1a2 2 0 012 2v2.6a10.02 10.02 0 01-.385 2.748L18.5 23.5M14.5 9.498v2M11.5 8.498v3M17.5 10.498v2"
    />
  );

export default SvgCursorHand1;
