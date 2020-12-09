import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPl1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".pl-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="pl-1_svg__a"
      x={0.5}
      y={0.504}
      width={23}
      height={23}
      rx={1}
      ry={1}
    />,
    <path
      className="pl-1_svg__a"
      d="M11.5 13.5a2 2 0 01-2 2h-2v-4h2a2 2 0 012 2zM7.5 19.504v-4M13.5 11.5V18a1.5 1.5 0 001.5 1.5h2.5"
    />
  );

export default SvgPl1;
