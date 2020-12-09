import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMoodRock = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".mood-rock_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="mood-rock_svg__a"
      d="M10.546 14.927A2 2 0 018 13V9.5a2 2 0 114 0v3.063M12 12.5v-3a2 2 0 114 0v3M20 16.178V2.5a2 2 0 00-4 0v7"
    />,
    <path
      className="mood-rock_svg__a"
      d="M12 20.5a4 4 0 014-4h-3.5a2 2 0 010-4h3.528a4.056 4.056 0 012.373.768A3.677 3.677 0 0120 16.178c0 3.133-3.155 7.322-8 7.322a8 8 0 01-8-8v-11a2 2 0 014 0v5"
    />
  );

export default SvgMoodRock;
