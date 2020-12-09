import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgProgrammingLanguageCode = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".programming-language-code_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="programming-language-code_svg__a"
      d="M5.5 17.5v-14a3 3 0 013-3H21M8.5 5.5h6M8.5 8.5h6M8.5 11.5h6M8.5 14.5h6"
    />,
    <path
      className="programming-language-code_svg__a"
      d="M15.5 23.5h-12a3 3 0 010-6h12a3 3 0 103 3V3A2.5 2.5 0 0121 .5a2.545 2.545 0 012.474 2.514.438.438 0 01-.436.486H18.5"
    />
  );

export default SvgProgrammingLanguageCode;
