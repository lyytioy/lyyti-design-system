import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgModernTv3D = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".modern-tv-3d_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="modern-tv-3d_svg__a"
      d="M15 13.5a3 3 0 003-3V9a3 3 0 00-3-3h-1.5v7.5zM6 7.5A1.5 1.5 0 017.5 6h1.135a1.873 1.873 0 01-.008 3.75 1.873 1.873 0 01.008 3.75H7.5A1.5 1.5 0 016 12"
    />,
    <rect
      className="modern-tv-3d_svg__a"
      x={0.75}
      y={1.5}
      width={22.5}
      height={16.5}
      rx={1}
      ry={1}
    />,
    <path
      className="modern-tv-3d_svg__a"
      d="M14.25 22.5h-4.5l.75-4.5h3l.75 4.5zM6.75 22.5h10.5"
    />
  );

export default SvgModernTv3D;
