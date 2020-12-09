import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVintageTv4 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".vintage-tv-4_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="vintage-tv-4_svg__a"
      x={1.5}
      y={6.5}
      width={21}
      height={15}
      rx={1}
      ry={1}
    />,
    <path
      className="vintage-tv-4_svg__a"
      d="M3.5 21.5v2M20.5 21.5v2M6 .5l6 6 6-6"
    />,
    <rect
      className="vintage-tv-4_svg__a"
      x={4.5}
      y={8.5}
      width={15}
      height={11}
      rx={3}
      ry={3}
    />
  );

export default SvgVintageTv4;
