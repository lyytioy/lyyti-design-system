import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTouchFingerLock = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".touch-finger-lock_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="touch-finger-lock_svg__a"
      d="M15.75 23.25l-2.929-2.344a1.639 1.639 0 01-.566-1.676 1.638 1.638 0 012.321-1.068l1.174.588V13.5a1.5 1.5 0 011.5-1.5 1.5 1.5 0 011.5 1.5v3l1.993.332a3 3 0 012.507 2.959v3.459M8.25 10.875a.375.375 0 11-.375.375.374.374 0 01.375-.375"
    />,
    <rect
      className="touch-finger-lock_svg__a"
      x={3.75}
      y={8.25}
      width={9}
      height={6}
      rx={0.375}
      ry={0.375}
    />,
    <path
      className="touch-finger-lock_svg__a"
      d="M5.25 8.25v-1.5a3 3 0 016 0v1.5"
    />,
    <path
      className="touch-finger-lock_svg__a"
      d="M8.25 17.25h-6a1.5 1.5 0 01-1.5-1.5V2.25a1.5 1.5 0 011.5-1.5h12a1.5 1.5 0 011.5 1.5v6"
    />
  );

export default SvgTouchFingerLock;
