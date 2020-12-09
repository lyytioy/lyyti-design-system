import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgProgrammingLanguageCode = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".programming-language-code_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="programming-language-code_svg__a"
      d="M14.25 23.25a3 3 0 003-3V3.75a3 3 0 016 0v3h-6"
    />,
    <path
      className="programming-language-code_svg__a"
      d="M6.75 17.25V3.75a3 3 0 013-3h10.5M3.75 17.25a3 3 0 000 6h10.5a3 3 0 010-6zM9.75 5.25h4.5M9.75 8.25h4.5M9.75 11.25h4.5"
    />
  );

export default SvgProgrammingLanguageCode;
