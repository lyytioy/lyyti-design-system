import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNavigationUp = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".navigation-up_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="navigation-up_svg__a"
      d="M5.252 17.247h4.5a1.5 1.5 0 011.5 1.5v4.5"
    />,
    <path
      className="navigation-up_svg__a"
      d="M11.252 23.247a6 6 0 01-6-6v-6H1.5a.75.75 0 01-.512-1.3l9.989-8.8a1.5 1.5 0 012.047 0l9.986 8.8a.75.75 0 01-.511 1.3h-3.747v10.5a1.5 1.5 0 01-1.5 1.5z"
    />
  );

export default SvgNavigationUp;
