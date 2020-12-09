import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPl = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".pl_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="pl_svg__a"
      x={0.531}
      y={5.004}
      width={23}
      height={14}
      rx={1}
      ry={1}
    />,
    <path
      className="pl_svg__a"
      d="M11.531 10.5a1.5 1.5 0 01-1.5 1.5h-1.5V9h1.5a1.5 1.5 0 011.5 1.5zM8.531 15.004v-3M13.531 9v5a1 1 0 001 1h2"
    />
  );

export default SvgPl;
