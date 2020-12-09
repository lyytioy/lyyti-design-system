import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNavigationRightCircle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".navigation-right-circle_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle
      className="navigation-right-circle_svg__a"
      cx={12}
      cy={11.998}
      r={11}
    />,
    <path
      className="navigation-right-circle_svg__a"
      d="M7.5 17c-1 0-3-6 1-6H18"
    />,
    <path className="navigation-right-circle_svg__a" d="M15 13.998l3-3-3-3" />
  );

export default SvgNavigationRightCircle;
