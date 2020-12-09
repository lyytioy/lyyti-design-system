import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFocus1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".focus-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="focus-1_svg__a" cx={12} cy={12} r={3.75} />,
    <path
      className="focus-1_svg__a"
      d="M.75 4.5V2.25a1.5 1.5 0 011.5-1.5H4.5M23.25 4.5V2.25a1.5 1.5 0 00-1.5-1.5H19.5M.75 19.5v2.25a1.5 1.5 0 001.5 1.5H4.5M23.25 19.5v2.25a1.5 1.5 0 01-1.5 1.5H19.5"
    />
  );

export default SvgFocus1;
