import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSkull1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".skull-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="skull-1_svg__a"
      d="M21.75 10.5a9.75 9.75 0 10-16.5 7.025V21a2.25 2.25 0 004.5 0 2.25 2.25 0 004.5 0 2.25 2.25 0 004.5 0v-3.475a9.714 9.714 0 003-7.025z"
    />,
    <circle className="skull-1_svg__a" cx={7.5} cy={10.5} r={2.25} />,
    <circle className="skull-1_svg__a" cx={16.5} cy={10.5} r={2.25} />,
    <path className="skull-1_svg__a" d="M12 15v2.25" />
  );

export default SvgSkull1;
