import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDmg1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".dmg-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="dmg-1_svg__a"
      x={0.738}
      y={0.754}
      width={22.5}
      height={22.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="dmg-1_svg__a"
      d="M19.488 15h.75v1.5a1.5 1.5 0 11-3 0V12a1.5 1.5 0 011.5-1.5h1.5M14.238 18.004v-7.5l-2.25 3.75-2.25-3.75v7.5M3.738 18a3 3 0 003-3v-1.5a3 3 0 00-3-3z"
    />
  );

export default SvgDmg1;
