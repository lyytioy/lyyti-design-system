import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSkull1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".skull-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="skull-1_svg__a"
      d="M12 .5A9.5 9.5 0 002.5 10v7.5a2 2 0 002 2v2a2 2 0 002 2h11a2 2 0 002-2v-2a2 2 0 002-2V10A9.5 9.5 0 0012 .5zM12 23.5v-4M16 23.5v-4M8 23.5v-4"
    />,
    <circle className="skull-1_svg__a" cx={17} cy={14} r={2.5} />,
    <circle className="skull-1_svg__a" cx={7} cy={14} r={2.5} />,
    <path
      className="skull-1_svg__a"
      d="M5.5 6.5v1a3 3 0 01-3 3M18.5 6.5v1a3 3 0 003 3M13 17.5a1 1 0 00-2 0"
    />
  );

export default SvgSkull1;
