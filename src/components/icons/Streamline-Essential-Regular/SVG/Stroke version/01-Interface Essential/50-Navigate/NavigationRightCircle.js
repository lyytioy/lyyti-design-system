import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNavigationRightCircle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".navigation-right-circle_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle
      className="navigation-right-circle_svg__a"
      cx={12}
      cy={11.997}
      r={11.25}
    />,
    <path
      className="navigation-right-circle_svg__a"
      d="M18.75 9.747H9a3.75 3.75 0 000 7.5"
    />,
    <path className="navigation-right-circle_svg__a" d="M15.75 6.747l3 3-3 3" />
  );

export default SvgNavigationRightCircle;
