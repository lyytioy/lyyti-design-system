import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgEraser1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".eraser-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="eraser-1_svg__a"
      d="M7.5 21.5a5.564 5.564 0 01-3.415-1.414l-2.171-2.173a2.006 2.006 0 010-2.829L14.085 2.913a2.006 2.006 0 012.829 0l5.171 5.171a2.006 2.006 0 010 2.829l-9.171 9.171A5.564 5.564 0 019.5 21.5zM9.5 7.498l8 8M.5 23.498h23"
    />
  );

export default SvgEraser1;
