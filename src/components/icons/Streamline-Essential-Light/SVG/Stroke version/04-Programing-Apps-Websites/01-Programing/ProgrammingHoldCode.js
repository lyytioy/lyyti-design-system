import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgProgrammingHoldCode = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".programming-hold-code_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="programming-hold-code_svg__a"
      x={0.5}
      y={13}
      width={4}
      height={8}
      rx={0.5}
      ry={0.5}
    />,
    <path
      className="programming-hold-code_svg__a"
      d="M4.5 19.563c10.5 3.5 7 3.5 19-2.5a2.758 2.758 0 00-3-1l-4.317 1.367"
    />,
    <path
      className="programming-hold-code_svg__a"
      d="M4.5 14h3c2.353 0 4 2 4.5 2h3.5c1 0 1 2 0 2H10M19.5 2.5l4 4-4 4M11.5 2.5l-4 4 4 4M16.5 2l-2 9"
    />
  );

export default SvgProgrammingHoldCode;
