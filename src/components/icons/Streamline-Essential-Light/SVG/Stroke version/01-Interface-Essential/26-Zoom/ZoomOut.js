import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgZoomOut = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".zoom-out_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="zoom-out_svg__a" cx={8.5} cy={8.499} r={8} />,
    <path
      className="zoom-out_svg__a"
      d="M14.156 14.155l9.344 9.344M5 8.499h7"
    />
  );

export default SvgZoomOut;
