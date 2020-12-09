import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFlagTriangle1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".flag-triangle-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="flag-triangle-1_svg__a"
      d="M4.75.5v23M7.75 14.5l11.5-7-11.5-7"
    />
  );

export default SvgFlagTriangle1;
