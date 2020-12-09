import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgJava = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".java_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="java_svg__a"
      x={0.5}
      y={5.004}
      width={23}
      height={14}
      rx={1}
      ry={1}
    />,
    <path
      className="java_svg__a"
      d="M6.031 9v4.5a1.5 1.5 0 01-3 0M8.031 15v-4.5a1.5 1.5 0 013 0V15M8.031 12.004h3M18.031 15v-4.5a1.5 1.5 0 113 0V15M18.031 12.004h3M16.031 9v1.5a7.5 7.5 0 01-1.5 4.5 7.5 7.5 0 01-1.5-4.5V9"
    />
  );

export default SvgJava;
