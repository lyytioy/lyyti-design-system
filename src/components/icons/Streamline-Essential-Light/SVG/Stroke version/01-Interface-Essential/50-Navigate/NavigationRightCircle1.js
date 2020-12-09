import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNavigationRightCircle1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".navigation-right-circle-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle
      className="navigation-right-circle-1_svg__a"
      cx={12}
      cy={11.998}
      r={11}
    />,
    <path
      className="navigation-right-circle-1_svg__a"
      d="M18 10H9a3 3 0 000 6h1.5"
    />,
    <path
      className="navigation-right-circle-1_svg__a"
      d="M14.997 12.998l3-3-3-3"
    />
  );

export default SvgNavigationRightCircle1;
