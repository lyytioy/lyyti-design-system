import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFlag1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".flag-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="flag-1_svg__a"
      d="M4.257 1.5h17c.55 0 .649.281.219.625L14.756 7.5l6.72 5.375c.43.344.331.625-.219.625h-17M2.257.5v23"
    />
  );

export default SvgFlag1;
