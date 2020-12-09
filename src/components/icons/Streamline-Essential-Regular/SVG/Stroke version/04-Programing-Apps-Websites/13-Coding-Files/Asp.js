import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAsp = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".asp_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="asp_svg__a"
      d="M1.488 3.754h21M1.488 20.254h21M4.488 15.754v-6a1.5 1.5 0 013 0v6M4.488 12.754h3M13.488 8.254h-1.5a1.5 1.5 0 00-1.5 1.5c0 2.25 3 2.25 3 4.5a1.5 1.5 0 01-1.5 1.5h-1.5M16.488 15.754v-7.5M16.488 8.254h.75a2.25 2.25 0 010 4.5h-.75"
    />
  );

export default SvgAsp;
