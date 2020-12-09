import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgUserSignal1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".user-signal-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="user-signal-1_svg__a" cx={12} cy={12} r={3} />,
    <path
      className="user-signal-1_svg__a"
      d="M7.5 22.5a4.5 4.5 0 019 0zM7.227 16.773a6.75 6.75 0 119.546 0M4.575 19.425a10.5 10.5 0 1114.85 0"
    />
  );

export default SvgUserSignal1;
