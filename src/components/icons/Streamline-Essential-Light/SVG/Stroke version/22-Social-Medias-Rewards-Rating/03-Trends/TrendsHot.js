import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTrendsHot = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".trends-hot_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="trends-hot_svg__a" cx={12} cy={12} r={11.5} />,
    <path
      className="trends-hot_svg__a"
      d="M14.5 14a1.5 1.5 0 01-3 0v-3a1.5 1.5 0 013 0zM8.497 9.5v6M5.497 15.5v-6M5.497 12.5h3M16.997 9.5h3M18.497 9.5v6"
    />
  );

export default SvgTrendsHot;
