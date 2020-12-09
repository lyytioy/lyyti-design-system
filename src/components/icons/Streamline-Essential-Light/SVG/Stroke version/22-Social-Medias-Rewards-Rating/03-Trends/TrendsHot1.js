import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTrendsHot1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".trends-hot-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="trends-hot-1_svg__a"
      d="M23.5 16a2 2 0 01-2 2h-19a2 2 0 01-2-2V8a2 2 0 012-2h19a2 2 0 012 2z"
    />,
    <path
      className="trends-hot-1_svg__a"
      d="M14.5 13.5a1.5 1.5 0 01-3 0v-3a1.5 1.5 0 013 0zM8.497 9v6M5.497 15V9M5.497 12h3M16.997 9h3M18.497 9v6"
    />
  );

export default SvgTrendsHot1;
