import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmallCaps = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".small-caps_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="small-caps_svg__a"
      d="M15.75 3.748A2.25 2.25 0 0013.5 1.5H3A2.25 2.25 0 00.75 3.748M8.25 1.498v21M5.25 22.498h6M11.25 9.748A2.25 2.25 0 0113.5 7.5H21a2.25 2.25 0 012.25 2.25M17.25 7.498v15M14.219 22.498h6"
    />
  );

export default SvgSmallCaps;
