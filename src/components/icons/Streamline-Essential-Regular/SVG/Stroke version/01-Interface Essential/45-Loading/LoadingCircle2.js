import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLoadingCircle2 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".loading-circle-2_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle
      className="loading-circle-2_svg__a"
      cx={12}
      cy={11.997}
      r={11.25}
    />,
    <path
      className="loading-circle-2_svg__a"
      d="M8.252 17.612a6.751 6.751 0 012.257-12.2M18.3 14.394a6.724 6.724 0 01-1.558 2.4M14.058 18.425a6.689 6.689 0 01-2.849.272"
    />,
    <circle className="loading-circle-2_svg__a" cx={12} cy={5.247} r={1.5} />
  );

export default SvgLoadingCircle2;
