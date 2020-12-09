import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLaptop1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".laptop-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="laptop-1_svg__a"
      d="M20 13V2.667A1.667 1.667 0 0018.333 1H5.666A1.667 1.667 0 004 2.667V13M15.5 13c0 1.1-1.567 2-3.5 2s-3.5-.9-3.5-2H1a5.281 5.281 0 005.123 4h11.754A5.281 5.281 0 0023 13zM12 19v4M4 23h16"
    />
  );

export default SvgLaptop1;
