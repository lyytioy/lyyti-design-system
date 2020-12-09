import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgModernTvFlat = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".modern-tv-flat_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="modern-tv-flat_svg__a"
      x={0.75}
      y={2.625}
      width={22.5}
      height={15}
      rx={1}
      ry={1}
    />,
    <path
      className="modern-tv-flat_svg__a"
      d="M10.5 21.375v-3.75M13.5 21.375v-3.75M8.25 21.375h7.5"
    />
  );

export default SvgModernTvFlat;
