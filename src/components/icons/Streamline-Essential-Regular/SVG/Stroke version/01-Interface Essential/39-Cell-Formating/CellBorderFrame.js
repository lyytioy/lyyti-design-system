import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCellBorderFrame = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cell-border-frame_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="cell-border-frame_svg__a"
      x={0.75}
      y={0.747}
      width={21}
      height={21}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="cell-border-frame_svg__a"
      d="M.75 11.247h1.5M5.25 11.247h1.5M9.75 11.247h3M15.75 11.247h1.5M20.25 11.247h1.5M11.25.747v1.5M11.25 5.247v1.5M11.25 15.747v1.5M11.25 20.247v1.5M11.25 9.747v3"
    />
  );

export default SvgCellBorderFrame;
