import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNavigationButtonRight = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".navigation-button-right_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="navigation-button-right_svg__a"
      x={11.251}
      y={5.997}
      width={12}
      height={12}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="navigation-button-right_svg__a"
      d="M6.751 11.997h-6M3.001 14.247l-2.25-2.25 2.25-2.25M14.251 11.997h6M18.001 14.247l2.25-2.25-2.25-2.25"
    />
  );

export default SvgNavigationButtonRight;
