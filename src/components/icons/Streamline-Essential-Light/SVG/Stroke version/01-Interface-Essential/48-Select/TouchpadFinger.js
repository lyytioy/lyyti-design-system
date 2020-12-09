import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTouchpadFinger = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".touchpad-finger_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="touchpad-finger_svg__a"
      d="M7 12.5H5.5a3 3 0 01-3-3v-6a3 3 0 013-3h13a3 3 0 013 3v6a3 3 0 01-3 3H17"
    />,
    <path
      className="touchpad-finger_svg__a"
      d="M9.654 23.5l-3.807-4.582A1.5 1.5 0 018.154 17l2.346 2.824V10a1.5 1.5 0 013 0v6.5h3a4 4 0 014 4v3"
    />
  );

export default SvgTouchpadFinger;
