import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTouchpad = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".touchpad_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="touchpad_svg__a"
      d="M21.15 15V7.234A1.723 1.723 0 0019.5 5.5H7.173A1.743 1.743 0 005.5 7.234V17a1.671 1.671 0 001.673 1.652H11"
    />,
    <path
      className="touchpad_svg__a"
      d="M16.391 23.5l-3.061-4.591c-1.215-1.856 1.789-2.48 3.17.612V11.5a1 1 0 012 0v4.75l4.366 1.31a.89.89 0 01.634.852.925.925 0 01-.017.174L22.5 23.5M5.5 8.5h15.65M3 6a3 3 0 013-3M.5 6A5.5 5.5 0 016 .5"
    />
  );

export default SvgTouchpad;
