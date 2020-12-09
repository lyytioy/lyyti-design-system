import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSdCardCheck = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".sd-card-check_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="sd-card-check_svg__a"
      d="M17.531 8.917v-3a1 1 0 00-.293-.707L12.824.793A1 1 0 0012.117.5H1.531a1 1 0 00-1 1v8h1v3h-1v10a1 1 0 001 1h8.457M4.531 3.5v5M7.531 3.5v5M10.531 3.5v5M13.531 5.5v4"
    />,
    <circle className="sd-card-check_svg__a" cx={17.53} cy={17.5} r={6} />,
    <path
      className="sd-card-check_svg__a"
      d="M20.2 15.755l-2.9 3.874a.75.75 0 01-1.13.08l-1.5-1.5"
    />
  );

export default SvgSdCardCheck;
