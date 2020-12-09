import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAtomicBomb = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".atomic-bomb_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="atomic-bomb_svg__a"
      d="M21.2 5a3.034 3.034 0 00-3.067-3 3.077 3.077 0 00-1.847.62 5.392 5.392 0 00-8.572 0A3.077 3.077 0 005.867 2 3.034 3.034 0 002.8 5M2.8 5a2.251 2.251 0 100 4.5h2.7M21.2 5a2.251 2.251 0 110 4.5h-2.7M8.5 9v2.5M12 9v1.5M15.5 9v2.5M5.5 23.5c1.335 0 3-1.213 3-4M18.5 23.5c-1.335 0-3-1.213-3-4M12 18v5.5M16.25 17.5a2 2 0 000-4h-1.779a2.966 2.966 0 00-4.442 0H8.25a2 2 0 000 4"
    />
  );

export default SvgAtomicBomb;
