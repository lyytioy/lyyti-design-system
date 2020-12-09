import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTouchFinger = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".touch-finger_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="touch-finger_svg__a"
      d="M9 23.25l-2.764-3.11a1.557 1.557 0 012.328-2.069L10.5 20.25v-9a1.5 1.5 0 013 0V18H15a4.5 4.5 0 014.5 4.5v.751M16.5 14.216a7.5 7.5 0 10-9 0M16.5 14.216a7.5 7.5 0 10-9 0"
    />
  );

export default SvgTouchFinger;
