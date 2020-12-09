import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmartWatchSquareAlternate = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smart-watch-square-alternate_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="smart-watch-square-alternate_svg__a"
      x={4.5}
      y={5.25}
      width={15}
      height={13.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="smart-watch-square-alternate_svg__a"
      d="M16.5 5.25h-9L8.041 2A1.5 1.5 0 019.521.75h4.958A1.5 1.5 0 0115.959 2zM7.5 18.75h9L15.959 22a1.5 1.5 0 01-1.48 1.253H9.521A1.5 1.5 0 018.041 22z"
    />
  );

export default SvgSmartWatchSquareAlternate;
