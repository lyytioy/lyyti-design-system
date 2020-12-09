import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDat1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".dat-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="dat-1_svg__a"
      x={0.738}
      y={0.754}
      width={22.5}
      height={22.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="dat-1_svg__a"
      d="M4.488 18a3 3 0 003-3v-1.5a3 3 0 00-3-3zM10.488 18v-6a1.5 1.5 0 113 0v6M10.488 15.004h3M17.988 18.004v-7.5M16.488 10.504h3"
    />
  );

export default SvgDat1;
