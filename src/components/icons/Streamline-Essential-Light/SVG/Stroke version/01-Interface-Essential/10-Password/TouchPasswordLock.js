import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTouchPasswordLock = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".touch-password-lock_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="touch-password-lock_svg__a"
      x={14.5}
      y={4.5}
      width={9}
      height={7}
      rx={1}
      ry={1}
    />,
    <path
      className="touch-password-lock_svg__a"
      d="M19 9.5V7M16 4.5v-1a3 3 0 016 0v1M19 6.75a.25.25 0 01.25.25.25.25 0 01-.25.25.25.25 0 01-.25-.25.25.25 0 01.25-.25M4.5 12.5h-3a1 1 0 01-1-1v-7a1 1 0 011-1h11"
    />,
    <path
      className="touch-password-lock_svg__a"
      d="M14 23.5l1.47-6.371a1.151 1.151 0 00.03-.262 1.164 1.164 0 00-.791-1.1L9.5 14V8a1.5 1.5 0 00-3 0v9.693s-.629-.816-1.265-1.6A1.591 1.591 0 004 15.5h-.5a1.17 1.17 0 00-1.019 1.743L6 23.5"
    />
  );

export default SvgTouchPasswordLock;
