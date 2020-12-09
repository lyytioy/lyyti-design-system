import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgWatchTime = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".watch-time_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="watch-time_svg__a" cx={12} cy={12} r={5.25} />,
    <path
      className="watch-time_svg__a"
      d="M15.75 4.5V2.25a1.5 1.5 0 00-1.5-1.5h-4.5a1.5 1.5 0 00-1.5 1.5V4.5M15.75 19.5v2.25a1.5 1.5 0 01-1.5 1.5h-4.5a1.5 1.5 0 01-1.5-1.5V19.5M11.25 10.5v2.25h2.25"
    />
  );

export default SvgWatchTime;
