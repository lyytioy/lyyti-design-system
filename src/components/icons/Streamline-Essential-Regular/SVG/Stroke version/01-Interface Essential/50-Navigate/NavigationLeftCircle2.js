import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNavigationLeftCircle2 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".navigation-left-circle-2_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle
      className="navigation-left-circle-2_svg__a"
      cx={12}
      cy={11.998}
      r={11.25}
    />,
    <path
      className="navigation-left-circle-2_svg__a"
      d="M10.5 15.748l-5.25-4.5 5.25-4.5V9h3a4.5 4.5 0 014.5 4.5v3a3 3 0 00-3-3h-4.5z"
    />
  );

export default SvgNavigationLeftCircle2;
