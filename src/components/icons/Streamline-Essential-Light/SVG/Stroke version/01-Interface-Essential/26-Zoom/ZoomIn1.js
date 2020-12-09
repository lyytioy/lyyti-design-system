import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgZoomIn1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".zoom-in-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="zoom-in-1_svg__a" cx={10.5} cy={10.499} r={10} />,
    <path
      className="zoom-in-1_svg__a"
      d="M23.5 23.499l-5.929-5.929M5.5 10.499h10M10.5 5.499v10"
    />
  );

export default SvgZoomIn1;
