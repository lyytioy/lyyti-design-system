import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgModernTvWide = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".modern-tv-wide_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="modern-tv-wide_svg__a"
      x={0.75}
      y={2.625}
      width={22.5}
      height={15}
      rx={1}
      ry={1}
    />,
    <path
      className="modern-tv-wide_svg__a"
      d="M3.75 17.625l-2.25 3.75M20.25 17.625l2.25 3.75"
    />,
    <rect
      className="modern-tv-wide_svg__a"
      x={0.75}
      y={2.625}
      width={22.5}
      height={15}
      rx={1}
      ry={1}
    />,
    <path
      className="modern-tv-wide_svg__a"
      d="M3.75 17.625l-2.25 3.75M20.25 17.625l2.25 3.75"
    />
  );

export default SvgModernTvWide;
