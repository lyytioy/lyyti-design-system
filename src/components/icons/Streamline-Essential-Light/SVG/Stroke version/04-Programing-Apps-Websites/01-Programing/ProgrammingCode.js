import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgProgrammingCode = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".programming-code_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="programming-code_svg__a"
      d="M7.5 8l2.5 2.5L7.5 13M13 11h4"
    />,
    <rect
      className="programming-code_svg__a"
      x={0.5}
      y={2}
      width={23}
      height={20}
      rx={1}
      ry={1}
    />,
    <rect
      className="programming-code_svg__a"
      x={2.5}
      y={4}
      width={19}
      height={16}
      rx={0.5}
      ry={0.5}
    />
  );

export default SvgProgrammingCode;
