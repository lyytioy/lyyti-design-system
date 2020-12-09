import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgZoomIn = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".zoom-in_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="zoom-in_svg__a" cx={8.5} cy={8.499} r={8} />,
    <path
      className="zoom-in_svg__a"
      d="M14.167 14.166l9.333 9.333M5 8.499h7M8.5 4.999v7"
    />
  );

export default SvgZoomIn;
