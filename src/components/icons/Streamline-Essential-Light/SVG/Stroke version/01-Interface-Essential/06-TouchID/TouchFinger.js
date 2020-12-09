import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTouchFinger = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".touch-finger_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="touch-finger_svg__a"
      d="M15 12.472a6.5 6.5 0 10-7 0M17.5 23.5l1.471-6.37a1.216 1.216 0 00.029-.262 1.165 1.165 0 00-.791-1.1L13 14V8a1.5 1.5 0 00-3 0v9.693s-.628-.817-1.265-1.6A1.591 1.591 0 007.5 15.5H7a1.171 1.171 0 00-1.02 1.744L9.5 23.5"
    />
  );

export default SvgTouchFinger;
