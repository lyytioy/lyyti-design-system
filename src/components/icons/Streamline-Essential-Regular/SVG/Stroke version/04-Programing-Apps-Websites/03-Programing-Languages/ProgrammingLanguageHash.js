import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgProgrammingLanguageHash = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".programming-language-hash_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="programming-language-hash_svg__a"
      x={1.5}
      y={2.25}
      width={21}
      height={19.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="programming-language-hash_svg__a"
      d="M1.5 6.75h21M8.25 12.75h9M6.75 15.75h9M11.25 9.75l-3 9M15 9.75l-3 9"
    />
  );

export default SvgProgrammingLanguageHash;
