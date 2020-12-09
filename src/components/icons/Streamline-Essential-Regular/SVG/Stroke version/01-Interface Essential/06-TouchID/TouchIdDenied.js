import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTouchIdDenied = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".touch-id-denied_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="touch-id-denied_svg__a"
      d="M12 1.753A7.5 7.5 0 00.75 8.25M15.75 8.25a7.478 7.478 0 00-.624-3M8.25 23.25a7.563 7.563 0 001.5-.15M.75 12.75v3a7.5 7.5 0 004.5 6.876"
    />,
    <path
      className="touch-id-denied_svg__a"
      d="M12.75 9.75v-1.5A4.5 4.5 0 006 4.352M3.75 8.25v7.5a4.5 4.5 0 004.5 4.5"
    />,
    <path
      className="touch-id-denied_svg__a"
      d="M9.75 12V8.25a1.5 1.5 0 00-3 0v3M6.75 15.75a1.5 1.5 0 001.5 1.5"
    />,
    <circle className="touch-id-denied_svg__a" cx={17.25} cy={17.25} r={6} />,
    <path
      className="touch-id-denied_svg__a"
      d="M19.5 14.999l-4.5 4.5M15 14.999l4.5 4.5"
    />
  );

export default SvgTouchIdDenied;
