import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgShrink1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".shrink-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="shrink-1_svg__a"
      d="M23.25.748l-9 9M9.75 20.998v-6.75H3M14.25 2.998v6.75H21M9.75 14.248l-9 9M.75.748l9 9M14.25 20.998v-6.75H21M9.75 2.998v6.75H3M14.25 14.248l9 9"
    />
  );

export default SvgShrink1;
