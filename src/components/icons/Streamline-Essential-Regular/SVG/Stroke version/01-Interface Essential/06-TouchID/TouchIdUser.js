import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTouchIdUser = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".touch-id-user_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="touch-id-user_svg__a"
      d="M12 1.753A7.5 7.5 0 00.75 8.25M15.75 8.25a7.478 7.478 0 00-.624-3M8.25 23.25a7.563 7.563 0 001.5-.15M.75 12.75v3a7.5 7.5 0 004.5 6.876"
    />,
    <path
      className="touch-id-user_svg__a"
      d="M12.75 10.5V8.25A4.5 4.5 0 006 4.352M3.75 8.25v7.5a4.5 4.5 0 006 4.244"
    />,
    <path
      className="touch-id-user_svg__a"
      d="M6.75 15.75a1.5 1.5 0 003 0v-7.5a1.5 1.5 0 00-3 0v3"
    />,
    <circle className="touch-id-user_svg__a" cx={18} cy={13.125} r={2.625} />,
    <path
      className="touch-id-user_svg__a"
      d="M18 16.5a5.25 5.25 0 00-5.25 5.25v1.5h10.5v-1.5A5.249 5.249 0 0018 16.5z"
    />
  );

export default SvgTouchIdUser;
