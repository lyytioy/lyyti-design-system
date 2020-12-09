import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTouchIdTarget = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".touch-id-target_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="touch-id-target_svg__a"
      d="M12 22.246A7.5 7.5 0 01.75 15.75M15.75 15.75a7.481 7.481 0 01-.624 3M8.25.75a7.489 7.489 0 011.5.15M.75 11.25v-3a7.5 7.5 0 014.5-6.876"
    />,
    <path
      className="touch-id-target_svg__a"
      d="M12.75 13.5v2.25A4.5 4.5 0 016 19.648M3.75 15.75v-7.5a4.5 4.5 0 016-4.244"
    />,
    <path
      className="touch-id-target_svg__a"
      d="M9.75 9.75v6a1.5 1.5 0 01-3 0v-3M6.75 8.25a1.5 1.5 0 011.5-1.5"
    />,
    <circle className="touch-id-target_svg__a" cx={17.25} cy={6.75} r={4.5} />,
    <path
      className="touch-id-target_svg__a"
      d="M17.25.75v3M17.25 9.75v3M20.25 6.75h3M11.25 6.75h3M17.25 6.375a.375.375 0 11-.375.375.375.375 0 01.375-.375"
    />
  );

export default SvgTouchIdTarget;
