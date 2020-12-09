import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNavigationLeftCircle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".navigation-left-circle_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle
      className="navigation-left-circle_svg__a"
      cx={12}
      cy={11.998}
      r={11}
    />,
    <path
      className="navigation-left-circle_svg__a"
      d="M16.5 17c1 0 3-6-1-6H6"
    />,
    <path className="navigation-left-circle_svg__a" d="M9 13.998l-3-3 3-3" />
  );

export default SvgNavigationLeftCircle;
