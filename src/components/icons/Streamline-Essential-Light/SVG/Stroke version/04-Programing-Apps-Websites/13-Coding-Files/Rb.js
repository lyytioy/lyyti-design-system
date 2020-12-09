import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgRb = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".rb_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="rb_svg__a"
      x={0.5}
      y={5.004}
      width={23}
      height={14}
      rx={1}
      ry={1}
    />,
    <path
      className="rb_svg__a"
      d="M10.5 10.5A1.5 1.5 0 019 12H7.5V9H9a1.5 1.5 0 011.5 1.5zM7.5 15.004v-3M10.5 15.004l-3-3M15.5 10.5A1.5 1.5 0 0114 12h-1.5V9H14a1.5 1.5 0 011.5 1.5zM15.5 13.5A1.5 1.5 0 0114 15h-1.5v-3H14a1.5 1.5 0 011.5 1.5z"
    />
  );

export default SvgRb;
