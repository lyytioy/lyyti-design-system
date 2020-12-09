import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgKeyboardAlt = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".keyboard-alt_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="keyboard-alt_svg__a"
      x={0.5}
      y={0.497}
      width={23}
      height={23}
      rx={4}
      ry={4}
    />,
    <path
      className="keyboard-alt_svg__a"
      d="M5.5 15.5v-6a2 2 0 014 0v6M5.5 11.497h4M11.5 7.5V14a1.5 1.5 0 001.5 1.5h2.5M15.5 7.497h4M17.5 7.497v8"
    />
  );

export default SvgKeyboardAlt;
