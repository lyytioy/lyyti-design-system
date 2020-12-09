import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTouchpadFinger = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".touchpad-finger_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="touchpad-finger_svg__a"
      d="M3.75 15.747a3 3 0 01-3-3v-9a3 3 0 013-3h16.5a3 3 0 013 3v9a2.991 2.991 0 01-.749 1.984"
    />,
    <path
      className="touchpad-finger_svg__a"
      d="M11.25 23.247L7.4 18.115a1.534 1.534 0 01-.05-1.77 1.534 1.534 0 012.195-.376l1.7 1.278V7.5A1.5 1.5 0 0112.75 6a1.5 1.5 0 011.5 1.5v6l4.174.928a3 3 0 012.337 3.2l-.511 5.622z"
    />
  );

export default SvgTouchpadFinger;
