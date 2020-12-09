import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgModernTv4K = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".modern-tv-4k_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="modern-tv-4k_svg__a"
      x={0.5}
      y={2}
      width={23}
      height={17}
      rx={1}
      ry={1}
    />,
    <path
      className="modern-tv-4k_svg__a"
      d="M10.5 19h3v3h-3zM7 22h10M10.5 15V7a5 5 0 00-5 5v1h5M17.5 7l-4 4 4 4M13.5 15V7"
    />
  );

export default SvgModernTv4K;
