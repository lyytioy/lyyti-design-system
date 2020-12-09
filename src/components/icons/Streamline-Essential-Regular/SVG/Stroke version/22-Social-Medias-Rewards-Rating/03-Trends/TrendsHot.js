import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTrendsHot = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".trends-hot_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="trends-hot_svg__a" cx={12} cy={12} r={11.25} />,
    <path
      className="trends-hot_svg__a"
      d="M18 15.75v-7.5M16.5 8.25h3M5.25 15.75v-7.5M8.25 15.75v-7.5M5.25 12.75h3M12.75 8.25a1.5 1.5 0 00-1.5 1.5v4.5a1.5 1.5 0 003 0v-4.5a1.5 1.5 0 00-1.5-1.5z"
    />
  );

export default SvgTrendsHot;
