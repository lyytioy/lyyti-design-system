import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNavigationUpCircle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".navigation-up-circle_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="navigation-up-circle_svg__a"
      d="M12.001 7.497v9M8.251 11.247l3.75-3.75 3.75 3.75"
    />,
    <circle
      className="navigation-up-circle_svg__a"
      cx={12.001}
      cy={11.997}
      r={10.5}
    />
  );

export default SvgNavigationUpCircle;
