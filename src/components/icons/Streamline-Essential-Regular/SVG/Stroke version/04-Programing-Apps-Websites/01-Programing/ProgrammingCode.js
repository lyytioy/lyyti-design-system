import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgProgrammingCode = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".programming-code_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="programming-code_svg__a"
      d="M2.25 21.75a1.5 1.5 0 01-1.5-1.5V3.865A1.62 1.62 0 012.365 2.25h19.278a1.612 1.612 0 011.607 1.607v16.278a1.62 1.62 0 01-1.615 1.615z"
    />,
    <path
      className="programming-code_svg__a"
      d="M4.85 18.75a1.071 1.071 0 01-1.1-1.038V6.368A1.156 1.156 0 014.935 5.25h14.136a1.151 1.151 0 011.179 1.113v11.269a1.156 1.156 0 01-1.185 1.118zM13.5 12h3"
    />,
    <path
      className="programming-code_svg__a"
      d="M8.25 9.75L10.5 12l-2.25 2.25"
    />
  );

export default SvgProgrammingCode;
