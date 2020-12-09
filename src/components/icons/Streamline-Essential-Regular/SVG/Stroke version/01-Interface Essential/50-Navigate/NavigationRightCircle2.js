import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNavigationRightCircle2 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".navigation-right-circle-2_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle
      className="navigation-right-circle-2_svg__a"
      cx={12}
      cy={11.998}
      r={11.25}
    />,
    <path
      className="navigation-right-circle-2_svg__a"
      d="M13.5 15.748l5.25-4.5-5.25-4.5V9h-3A4.5 4.5 0 006 13.5v3a3 3 0 013-3h4.5z"
    />
  );

export default SvgNavigationRightCircle2;
