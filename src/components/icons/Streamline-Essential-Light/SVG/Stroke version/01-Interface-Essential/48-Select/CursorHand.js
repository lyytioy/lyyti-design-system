import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCursorHand = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cursor-hand_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="cursor-hand_svg__a"
      d="M8 23.5v-1l-2.328-2.33A4 4 0 014.5 17.342V14.5a3 3 0 013-3"
    />,
    <path
      className="cursor-hand_svg__a"
      d="M7.5 15.5V3a1.5 1.5 0 113 0v5.5h2a1 1 0 011 1h2a1 1 0 011 1H18a1.5 1.5 0 011.5 1.5v3.1a10.02 10.02 0 01-.385 2.748L17.5 23.5M13.5 9.498v2M10.5 8.498v3M16.5 10.498v2"
    />
  );

export default SvgCursorHand;
