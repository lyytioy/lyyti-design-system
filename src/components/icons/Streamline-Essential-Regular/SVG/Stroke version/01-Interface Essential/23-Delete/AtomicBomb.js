import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAtomicBomb = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".atomic-bomb_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="atomic-bomb_svg__a"
      d="M21 5.25a2.987 2.987 0 00-4.807-2.381 5.207 5.207 0 00-8.385 0A2.987 2.987 0 003 5.25M9 9v4.75M12 9v3.75M15 9v4.75M6.09 23.25a3.067 3.067 0 002.91-3v-2.5M17.911 23.25a3.067 3.067 0 01-2.906-3L15 17.75M12 18.75v4.5M3 5.25a2.25 2.25 0 000 4.5h2.25M21 5.25a2.25 2.25 0 010 4.5h-2.25"
    />,
    <path
      className="atomic-bomb_svg__a"
      d="M16 13.75h-1.778a2.968 2.968 0 00-4.443 0H8a2 2 0 000 4h1.779a2.968 2.968 0 004.443 0H16a2 2 0 000-4z"
    />
  );

export default SvgAtomicBomb;
