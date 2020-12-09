import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgModernTvHd = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".modern-tv-hd_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="modern-tv-hd_svg__a"
      x={0.5}
      y={2}
      width={23}
      height={17}
      rx={1}
      ry={1}
    />,
    <path
      className="modern-tv-hd_svg__a"
      d="M10.5 19h3v3h-3zM7 22h10M13.5 6a4 4 0 010 8zM10.5 6v8M6.5 14V6M6.5 10h4"
    />
  );

export default SvgModernTvHd;
