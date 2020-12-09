import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTouchId1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".touch-id-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="touch-id-1_svg__a"
      d="M12 23.5a9 9 0 009-9v-5a8.967 8.967 0 00-2.293-6M3 11.5v3a9 9 0 005.5 8.294M16.5 1.706A9 9 0 003.014 9"
    />,
    <path
      className="touch-id-1_svg__a"
      d="M9.5 4.044A6 6 0 0118 9.5v5a6.026 6.026 0 01-.189 1.5M16.472 18.5A6 6 0 016 14.5v-5a5.979 5.979 0 011.528-4"
    />,
    <path
      className="touch-id-1_svg__a"
      d="M9 14.5a3 3 0 006 0v-5a3 3 0 00-6 0v3M12 9.5v3M12 14.5v1"
    />
  );

export default SvgTouchId1;
