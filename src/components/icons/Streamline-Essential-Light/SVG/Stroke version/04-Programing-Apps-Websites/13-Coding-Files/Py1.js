import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPy1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".py-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="py-1_svg__a"
      x={0.5}
      y={0.504}
      width={23}
      height={23}
      rx={1}
      ry={1}
    />,
    <path
      className="py-1_svg__a"
      d="M17.5 11.5v2a2 2 0 01-4 0v-2M15.5 15.504v4M11.5 13.5a2 2 0 01-2 2h-2v-4h2a2 2 0 012 2zM7.5 19.504v-4"
    />
  );

export default SvgPy1;
