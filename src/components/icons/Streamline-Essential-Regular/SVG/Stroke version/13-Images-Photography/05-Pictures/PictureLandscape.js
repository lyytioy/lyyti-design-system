import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPictureLandscape = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".picture-landscape_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="picture-landscape_svg__a"
      x={0.75}
      y={0.75}
      width={22.5}
      height={22.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="picture-landscape_svg__a"
      d="M5.25 17.25l3.462-4.616a1.5 1.5 0 012.261-.161L12 13.5l3.3-4.4a1.5 1.5 0 012.4 0l2.67 3.56"
    />,
    <circle
      className="picture-landscape_svg__a"
      cx={6.375}
      cy={6.375}
      r={1.875}
    />,
    <path className="picture-landscape_svg__a" d="M.75 17.25h22.5" />
  );

export default SvgPictureLandscape;
