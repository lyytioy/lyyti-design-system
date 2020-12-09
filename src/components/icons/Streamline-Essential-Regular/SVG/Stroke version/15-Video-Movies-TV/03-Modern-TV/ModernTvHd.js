import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgModernTvHd = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".modern-tv-hd_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="modern-tv-hd_svg__a"
      x={0.75}
      y={1.5}
      width={22.5}
      height={16.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="modern-tv-hd_svg__a"
      d="M14.25 22.5h-4.5l.75-4.5h3l.75 4.5zM6.75 22.5h10.5M6 13.5V6M10.5 13.5V6M6 10.5h4.5M15 13.5a3 3 0 003-3V9a3 3 0 00-3-3h-1.5v7.5z"
    />
  );

export default SvgModernTvHd;
