import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNavigationArrowsLeft = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".navigation-arrows-left_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="navigation-arrows-left_svg__a"
      d="M23.251 22.5a.75.75 0 01-1.3.511l-8.8-9.987a1.5 1.5 0 010-2.047l8.8-9.986a.75.75 0 011.3.511z"
    />,
    <path
      className="navigation-arrows-left_svg__a"
      d="M17.251 6.323V1.5a.75.75 0 00-1.3-.511l-8.8 9.986a1.5 1.5 0 000 2.047l8.8 9.987a.75.75 0 001.3-.511V17.67"
    />,
    <path
      className="navigation-arrows-left_svg__a"
      d="M11.251 6.323V1.5a.75.75 0 00-1.3-.511l-8.8 9.986a1.5 1.5 0 000 2.047l8.8 9.987a.75.75 0 001.3-.511V17.67"
    />
  );

export default SvgNavigationArrowsLeft;
