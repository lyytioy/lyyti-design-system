import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFlagTriangle1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".flag-triangle-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="flag-triangle-1_svg__a"
      d="M4.875.75v22.5M4.875 15.75l14.25-8.25L4.875.75"
    />
  );

export default SvgFlagTriangle1;
