import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTouchFingerLock = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".touch-finger-lock_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="touch-finger-lock_svg__a"
      d="M23.5 23.5v-2a4 4 0 00-4-4h-3V11a1.5 1.5 0 00-3 0v9.827L11.154 18a1.5 1.5 0 00-2.307 1.918l2.975 3.582"
    />,
    <path
      className="touch-finger-lock_svg__a"
      d="M11.5 14.5h-10a1 1 0 01-1-1v-12a1 1 0 011-1h13a1 1 0 011 1v6"
    />,
    <path
      className="touch-finger-lock_svg__a"
      d="M8 8.25a.25.25 0 01.25.25.25.25 0 01-.25.25.25.25 0 01-.25-.25.25.25 0 01.25-.25"
    />,
    <rect
      className="touch-finger-lock_svg__a"
      x={4.5}
      y={5.5}
      width={7}
      height={6}
      rx={1}
      ry={1}
    />,
    <path
      className="touch-finger-lock_svg__a"
      d="M5.5 5.5V5a2.5 2.5 0 015 0v.5"
    />
  );

export default SvgTouchFingerLock;
