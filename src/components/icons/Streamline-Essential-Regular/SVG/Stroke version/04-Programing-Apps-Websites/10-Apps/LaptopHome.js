import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLaptopHome = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".laptop-home_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="laptop-home_svg__a"
      d="M22.371 19.228A1.226 1.226 0 0121.273 21H2.727a1.225 1.225 0 01-1.1-1.775L3 15h18zM19.5 3A1.5 1.5 0 0121 4.5V15H3.006V4.5a1.5 1.5 0 011.5-1.5M11.25 18.001h1.5"
    />,
    <path
      className="laptop-home_svg__a"
      d="M7.5 6.2v4.3A1.5 1.5 0 009 12h6a1.5 1.5 0 001.5-1.5V6.2"
    />,
    <path
      className="laptop-home_svg__a"
      d="M6 7.514l4.518-3.954a2.252 2.252 0 012.964 0L18 7.514"
    />,
    <path className="laptop-home_svg__a" d="M13.5 12h-3V9a1.5 1.5 0 013 0z" />
  );

export default SvgLaptopHome;
