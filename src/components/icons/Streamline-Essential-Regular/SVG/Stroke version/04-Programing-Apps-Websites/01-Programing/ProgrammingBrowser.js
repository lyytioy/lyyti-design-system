import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgProgrammingBrowser = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".programming-browser_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="programming-browser_svg__a"
      d="M2.25 21.75a1.5 1.5 0 01-1.5-1.5V3.865A1.62 1.62 0 012.365 2.25h19.278a1.612 1.612 0 011.607 1.607v16.278a1.62 1.62 0 01-1.615 1.615zM23.25 6.75H.75"
    />,
    <path
      className="programming-browser_svg__a"
      d="M16.5 11.25l3 3-3 3M7.5 11.25l-3 3 3 3M13.5 11.25l-3 6"
    />
  );

export default SvgProgrammingBrowser;
