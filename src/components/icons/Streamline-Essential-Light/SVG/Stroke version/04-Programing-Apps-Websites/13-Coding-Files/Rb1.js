import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgRb1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".rb-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="rb-1_svg__a"
      x={0.5}
      y={0.504}
      width={23}
      height={23}
      rx={1}
      ry={1}
    />,
    <path
      className="rb-1_svg__a"
      d="M11.5 13.5a2 2 0 01-2 2h-2v-4h2a2 2 0 012 2zM7.5 19.504v-4M11.5 19.504l-4-4M17.5 13.5a2 2 0 01-2 2h-2v-4h2a2 2 0 012 2zM17.5 17.5a2 2 0 01-2 2h-2v-4h2a2 2 0 012 2z"
    />
  );

export default SvgRb1;
