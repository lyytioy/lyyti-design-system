import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgShrink2 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".shrink-2_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="shrink-2_svg__a"
      d="M.5 23.499l8-8M3.5 15.499h5v5M23.5.499l-8 8M20.5 8.499h-5v-5"
    />
  );

export default SvgShrink2;
