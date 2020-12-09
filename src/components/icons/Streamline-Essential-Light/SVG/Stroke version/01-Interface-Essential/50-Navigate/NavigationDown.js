import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNavigationDown = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".navigation-down_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="navigation-down_svg__a"
      d="M4.5 1A.5.5 0 015 .5h8.293a.5.5 0 01.354.146l5.707 5.707a.5.5 0 01.146.354V14.5H22a.5.5 0 01.308.894l-10 8a.5.5 0 01-.616 0l-10-8A.5.5 0 012 14.5h2a.5.5 0 00.5-.5z"
    />,
    <path
      className="navigation-down_svg__a"
      d="M19.455 6.5H14a.5.5 0 01-.5-.5V.545"
    />
  );

export default SvgNavigationDown;
