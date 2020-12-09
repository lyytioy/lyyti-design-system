import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgApp1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".app-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="app-1_svg__a"
      x={0.5}
      y={0.504}
      width={23}
      height={23}
      rx={1}
      ry={1}
    />,
    <path
      className="app-1_svg__a"
      d="M4 19.5v-6a2 2 0 114 0v6M4 15.504h4M20 13.5a2 2 0 01-2 2h-2v-4h2a2 2 0 012 2zM16 19.504v-4M14 13.5a2 2 0 01-2 2h-2v-4h2a2 2 0 012 2zM10 19.504v-4"
    />
  );

export default SvgApp1;
