import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFlag1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".flag-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="flag-1_svg__a"
      d="M.75.75v22.5M.75 2.25H22.5a.75.75 0 01.56 1.248L19.055 8a1.5 1.5 0 000 1.994l4 4.505a.75.75 0 01-.56 1.248H.75"
    />
  );

export default SvgFlag1;
