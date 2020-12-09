import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVintageTv4 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".vintage-tv-4_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="vintage-tv-4_svg__a"
      x={0.75}
      y={6}
      width={22.5}
      height={16.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="vintage-tv-4_svg__a"
      d="M3.75 17.511v-6.558a1.487 1.487 0 011.227-1.476A42.015 42.015 0 0112 9a42.015 42.015 0 017.023.477 1.487 1.487 0 011.227 1.476v6.558A1.493 1.493 0 0119 18.992a44.132 44.132 0 01-7 .508 44.132 44.132 0 01-6.995-.508 1.493 1.493 0 01-1.255-1.481zM10.5 1.5L14.25 6 18 1.5"
    />
  );

export default SvgVintageTv4;
