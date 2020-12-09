import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgBin1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".bin-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="bin-1_svg__a"
      x={0.738}
      y={0.754}
      width={22.5}
      height={22.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="bin-1_svg__a"
      d="M5.988 18.004v-7.5M5.988 10.5h1.5a1.5 1.5 0 011.5 1.5v.75a1.5 1.5 0 01-1.5 1.5h-1.5M5.988 14.254h1.5a1.5 1.5 0 011.5 1.5v.75a1.5 1.5 0 01-1.5 1.5h-1.5M11.988 18.004v-7.5M14.988 18.004v-7.5l3 7.5v-7.5"
    />
  );

export default SvgBin1;
