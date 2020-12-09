import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmartWatchSquareHouse = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smart-watch-square-house_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="smart-watch-square-house_svg__a"
      x={3.5}
      y={3.5}
      width={17}
      height={17}
      rx={2}
      ry={2}
    />,
    <path
      className="smart-watch-square-house_svg__a"
      d="M16.5 3.5h-9l1-3h7l1 3zM7.5 20.5h9l-1 3h-7l-1-3zM10.5 16.5V14a1.5 1.5 0 013 0v2.5"
    />,
    <path
      className="smart-watch-square-house_svg__a"
      d="M8.5 10.682V16.5h7v-5.818"
    />,
    <path
      className="smart-watch-square-house_svg__a"
      d="M6.5 12.5l5.5-5 5.5 5"
    />
  );

export default SvgSmartWatchSquareHouse;
