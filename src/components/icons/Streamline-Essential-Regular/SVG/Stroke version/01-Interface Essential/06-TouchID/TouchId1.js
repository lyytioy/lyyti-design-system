import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTouchId1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".touch-id-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="touch-id-1_svg__a"
      d="M3.749 9a8.25 8.25 0 0113.5-6.364M19.687 6a8.23 8.23 0 01.562 3v6A8.25 8.25 0 0112 23.25a8.336 8.336 0 01-1.5-.136M6.751 21.365a8.234 8.234 0 01-3-6.365v-2.25"
    />,
    <path
      className="touch-id-1_svg__a"
      d="M15.749 15V9a3.75 3.75 0 00-6-3M8.249 9v6a3.753 3.753 0 005.251 3.438M11.999 9.75v4.5"
    />
  );

export default SvgTouchId1;
