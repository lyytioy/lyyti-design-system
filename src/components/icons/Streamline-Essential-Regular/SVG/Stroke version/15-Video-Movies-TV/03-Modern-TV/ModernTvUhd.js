import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgModernTvUhd = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".modern-tv-uhd_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="modern-tv-uhd_svg__a"
      x={0.75}
      y={1.5}
      width={22.5}
      height={16.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="modern-tv-uhd_svg__a"
      d="M14.25 22.5h-4.5l.75-4.5h3l.75 4.5zM6.75 22.5h10.5M5.25 6v6a1.5 1.5 0 003 0V6M11.25 13.5V6M14.25 13.5V6M11.25 10.5h3M17.25 13.5a3 3 0 003-3V9a3 3 0 00-3-3z"
    />
  );

export default SvgModernTvUhd;
