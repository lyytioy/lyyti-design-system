import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgYm1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".ym-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="ym-1_svg__a"
      x={0.738}
      y={0.754}
      width={22.5}
      height={22.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="ym-1_svg__a"
      d="M6.738 10.5v2.25a1.5 1.5 0 003 0V10.5M8.238 14.254v3.75M17.238 18.004v-7.5l-2.25 3.75-2.25-3.75v7.5"
    />
  );

export default SvgYm1;
