import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTouchPasswordApproved = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".touch-password-approved_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="touch-password-approved_svg__a"
      d="M4.5 12.5h-3a1 1 0 01-1-1v-7a1 1 0 011-1h21a1 1 0 011 1v7a1 1 0 01-1 1h-11"
    />,
    <path
      className="touch-password-approved_svg__a"
      d="M21 6l-4 4-2-2M14 23.5l1.47-6.371a1.151 1.151 0 00.03-.262 1.164 1.164 0 00-.791-1.1L9.5 14V8a1.5 1.5 0 00-3 0v9.693s-.629-.816-1.265-1.6A1.591 1.591 0 004 15.5h-.5a1.17 1.17 0 00-1.019 1.743L6 23.5"
    />
  );

export default SvgTouchPasswordApproved;
