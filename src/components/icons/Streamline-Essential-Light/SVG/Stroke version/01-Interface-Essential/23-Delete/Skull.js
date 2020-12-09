import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSkull = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".skull_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="skull_svg__a"
      d="M17.5 23.5v-5a5 5 0 005-5V11a10.5 10.5 0 00-21 0v2.5a5 5 0 005 5v5"
    />,
    <path
      className="skull_svg__a"
      d="M6.441 4.5c0 2.734-1.636 4-3.441 4H1.8"
    />,
    <circle className="skull_svg__a" cx={7} cy={12.5} r={3} />,
    <path
      className="skull_svg__a"
      d="M17.559 4.5c0 2.734 1.636 4 3.441 4h1.2"
    />,
    <circle className="skull_svg__a" cx={17} cy={12.5} r={3} />,
    <path
      className="skull_svg__a"
      d="M11 16l.276-.553a.81.81 0 011.448 0L13 16M10 18.5v5M14 18.5v5"
    />
  );

export default SvgSkull;
