import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneLockLeft = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phone-lock-left_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="phone-lock-left_svg__a"
      x={14.25}
      y={6}
      width={9}
      height={7.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="phone-lock-left_svg__a"
      d="M18.75 1.5a3 3 0 00-3 3V6h6V4.5a3 3 0 00-3-3zM18.75 9.4a.375.375 0 10.375.375.375.375 0 00-.375-.375M18.417 16.765l-3.182 3.182a1.5 1.5 0 01-2.121 0l-7.425-7.425a1.5 1.5 0 010-2.121l3.182-3.182a1.5 1.5 0 012.122 0M6.75 18v4.5H1.5"
    />,
    <path
      className="phone-lock-left_svg__a"
      d="M4.37 4.5a11.207 11.207 0 00-3.62 8.25 11.56 11.56 0 006 9.75"
    />
  );

export default SvgPhoneLockLeft;
