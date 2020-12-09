import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSdCardSubtract = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".sd-card-subtract_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="sd-card-subtract_svg__a"
      d="M17.5 8.917v-3a1 1 0 00-.293-.707L12.8.793A1 1 0 0012.089.5H1.5a1 1 0 00-1 1v8h1v3h-1v10a1 1 0 001 1h8.461M4.504 3.5v5M7.504 3.5v5M10.504 3.5v5M13.504 5.5v4"
    />,
    <circle className="sd-card-subtract_svg__a" cx={17.5} cy={17.5} r={6} />,
    <path className="sd-card-subtract_svg__a" d="M20.5 17.5h-6" />
  );

export default SvgSdCardSubtract;
