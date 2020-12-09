import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgModernTvUhd = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".modern-tv-uhd_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="modern-tv-uhd_svg__a"
      x={0.5}
      y={2}
      width={23}
      height={17}
      rx={1}
      ry={1}
    />,
    <path
      className="modern-tv-uhd_svg__a"
      d="M10.5 19h3v3h-3zM7 22h10M16.5 6a4 4 0 010 8zM14.5 6v8M10.5 14V6M10.5 10h4M8.5 6v6a2 2 0 01-4 0V6"
    />
  );

export default SvgModernTvUhd;
