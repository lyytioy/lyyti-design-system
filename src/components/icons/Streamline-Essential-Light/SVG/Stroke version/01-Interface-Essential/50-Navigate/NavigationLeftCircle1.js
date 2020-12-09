import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNavigationLeftCircle1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".navigation-left-circle-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle
      className="navigation-left-circle-1_svg__a"
      cx={12}
      cy={11.998}
      r={11}
    />,
    <path
      className="navigation-left-circle-1_svg__a"
      d="M6 10h9a3 3 0 010 6h-1.5"
    />,
    <path className="navigation-left-circle-1_svg__a" d="M9 12.998l-3-3 3-3" />
  );

export default SvgNavigationLeftCircle1;
