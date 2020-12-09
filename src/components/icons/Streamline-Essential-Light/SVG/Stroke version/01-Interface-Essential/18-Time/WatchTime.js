import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgWatchTime = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".watch-time_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="watch-time_svg__a"
      d="M8.5 5.937V1.5a1 1 0 011-1h5a1 1 0 011 1v4.438M8.5 18.063V22.5a1 1 0 001 1h5a1 1 0 001-1v-4.436"
    />,
    <circle className="watch-time_svg__a" cx={12} cy={12.001} r={7} />,
    <path className="watch-time_svg__a" d="M12.003 9.001v3l3.5 3" />
  );

export default SvgWatchTime;
