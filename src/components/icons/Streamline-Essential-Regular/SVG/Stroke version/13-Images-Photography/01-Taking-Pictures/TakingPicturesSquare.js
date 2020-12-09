import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTakingPicturesSquare = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".taking-pictures-square_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="taking-pictures-square_svg__a"
      d="M15 8.25l-.75-1.5h-4.5L9 8.25H6.75a1.5 1.5 0 00-1.5 1.5v6a1.5 1.5 0 001.5 1.5h10.5a1.5 1.5 0 001.5-1.5v-6a1.5 1.5 0 00-1.5-1.5z"
    />,
    <circle
      className="taking-pictures-square_svg__a"
      cx={12}
      cy={12.375}
      r={1.875}
    />,
    <rect
      className="taking-pictures-square_svg__a"
      x={0.75}
      y={0.75}
      width={22.5}
      height={22.5}
      rx={3}
      ry={3}
    />
  );

export default SvgTakingPicturesSquare;
