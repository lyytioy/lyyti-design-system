import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgApp1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".app-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="app-1_svg__a"
      x={0.75}
      y={0.754}
      width={22.5}
      height={22.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="app-1_svg__a"
      d="M4.5 18v-6a1.5 1.5 0 113 0v6M4.5 15.004h3M16.5 18.004v-7.5M16.5 10.5h.75a2.25 2.25 0 010 4.5h-.75M10.5 18.004v-7.5M10.5 10.5h.75a2.25 2.25 0 010 4.5h-.75"
    />
  );

export default SvgApp1;
