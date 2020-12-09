import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCaps = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".caps_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="caps_svg__a"
      d="M.5 7.5v-1a1 1 0 011-1h8a1 1 0 011 1v1M5.5 5.498v14M4 19.498h3M13.5 7.5v-1a1 1 0 011-1h8a1 1 0 011 1v1M18.5 5.498v14M17 19.498h3"
    />
  );

export default SvgCaps;
