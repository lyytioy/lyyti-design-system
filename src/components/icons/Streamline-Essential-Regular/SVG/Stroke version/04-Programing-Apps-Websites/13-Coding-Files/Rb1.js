import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgRb1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".rb-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="rb-1_svg__a"
      x={0.752}
      y={0.753}
      width={22.5}
      height={22.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="rb-1_svg__a"
      d="M7.502 18.004v-7.5M7.5 10.5h1.127a1.875 1.875 0 010 3.75H7.5M10.502 18.004l-2.25-3.75M13.502 18.004v-7.5M13.5 10.5H15a1.5 1.5 0 011.5 1.5v.75a1.5 1.5 0 01-1.5 1.5h-1.5M13.5 14.254H15a1.5 1.5 0 011.5 1.5v.75A1.5 1.5 0 0115 18h-1.5"
    />
  );

export default SvgRb1;
