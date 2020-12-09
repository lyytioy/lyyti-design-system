import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgScissors2 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".scissors-2_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="scissors-2_svg__a" cx={4} cy={5.999} r={3.5} />,
    <path
      className="scissors-2_svg__a"
      d="M11.148 10.731L23.5 18.086a2.214 2.214 0 01-2.905.75L4.654 9.438"
    />,
    <circle className="scissors-2_svg__a" cx={4} cy={17.999} r={3.5} />,
    <path
      className="scissors-2_svg__a"
      d="M13.279 12L23.5 5.913a2.213 2.213 0 00-2.905-.75L4.654 14.56"
    />
  );

export default SvgScissors2;
