import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCirclePadFinger = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".circle-pad-finger_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="circle-pad-finger_svg__a"
      d="M10.25 23.247L6.4 18.115a1.534 1.534 0 01-.05-1.77 1.534 1.534 0 012.195-.376l1.7 1.278V7.5A1.5 1.5 0 0111.75 6a1.5 1.5 0 011.5 1.5v6l4.174.928a3 3 0 012.337 3.2l-.511 5.622zM6.5 13.6A7.5 7.5 0 1118.247 12"
    />
  );

export default SvgCirclePadFinger;
