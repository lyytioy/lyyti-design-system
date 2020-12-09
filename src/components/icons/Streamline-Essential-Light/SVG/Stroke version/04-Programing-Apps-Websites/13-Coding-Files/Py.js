import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPy = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".py_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="py_svg__a"
      x={0.5}
      y={5.004}
      width={23}
      height={14}
      rx={1}
      ry={1}
    />,
    <path
      className="py_svg__a"
      d="M11.5 10.5A1.5 1.5 0 0110 12H8.5V9H10a1.5 1.5 0 011.5 1.5zM8.5 15.004v-3M15.5 12.004v3M13.5 9v1a2 2 0 004 0V9"
    />
  );

export default SvgPy;
