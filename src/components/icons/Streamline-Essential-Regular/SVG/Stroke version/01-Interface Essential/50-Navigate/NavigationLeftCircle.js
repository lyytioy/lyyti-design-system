import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNavigationLeftCircle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".navigation-left-circle_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle
      className="navigation-left-circle_svg__a"
      cx={12}
      cy={11.997}
      r={11.25}
    />,
    <path
      className="navigation-left-circle_svg__a"
      d="M5.25 9.747H15a3.75 3.75 0 010 7.5"
    />,
    <path className="navigation-left-circle_svg__a" d="M8.25 6.747l-3 3 3 3" />
  );

export default SvgNavigationLeftCircle;
