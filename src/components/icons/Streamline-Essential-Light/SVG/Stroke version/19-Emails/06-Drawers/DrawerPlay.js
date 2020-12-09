import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDrawerPlay = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".drawer-play_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="drawer-play_svg__a"
      x={7.497}
      y={4.5}
      width={9}
      height={8}
      rx={1}
      ry={1}
    />,
    <path
      className="drawer-play_svg__a"
      d="M10.5 8.5V7.287a.287.287 0 01.434-.246l2.927 1.213a.287.287 0 010 .492l-2.93 1.213a.287.287 0 01-.434-.246z"
    />,
    <path
      className="drawer-play_svg__a"
      d="M19.5 14.5v-13a1 1 0 00-1-1h-13a1 1 0 00-1 1v13M23.5 22.5a1 1 0 01-1 1h-21a1 1 0 01-1-1v-6h7v1a2.006 2.006 0 002 2h5a2.006 2.006 0 002-2v-1h7zM.5 16.5l4-6M19.5 10.5l4 6"
    />
  );

export default SvgDrawerPlay;
