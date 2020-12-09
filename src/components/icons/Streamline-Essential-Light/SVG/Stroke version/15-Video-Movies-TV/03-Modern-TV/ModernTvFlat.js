import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgModernTvFlat = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".modern-tv-flat_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="modern-tv-flat_svg__a"
      x={0.5}
      y={2}
      width={23}
      height={17}
      rx={1}
      ry={1}
    />,
    <path className="modern-tv-flat_svg__a" d="M10.5 19h3v3h-3zM7 22h10" />
  );

export default SvgModernTvFlat;
