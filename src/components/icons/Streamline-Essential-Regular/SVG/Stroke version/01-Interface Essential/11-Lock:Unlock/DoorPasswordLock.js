import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDoorPasswordLock = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".door-password-lock_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="door-password-lock_svg__a"
      d="M14.25 18.75a4.5 4.5 0 01-4.5 4.5h-4.5a4.5 4.5 0 01-4.5-4.5V5.25a4.5 4.5 0 014.5-4.5h4.5a4.5 4.5 0 014.5 4.5v9M.75 5.25h13.5M.75 11.25h13.5"
    />,
    <path
      className="door-password-lock_svg__a"
      d="M4.5 7.875a.375.375 0 11-.375.375.374.374 0 01.375-.375M10.5 7.875a.375.375 0 11-.375.375.374.374 0 01.375-.375M7.5 18.75a2.25 2.25 0 010-4.5h8.646a14.954 14.954 0 016.69 1.579.75.75 0 010 1.341 14.955 14.955 0 01-6.69 1.58z"
    />
  );

export default SvgDoorPasswordLock;
