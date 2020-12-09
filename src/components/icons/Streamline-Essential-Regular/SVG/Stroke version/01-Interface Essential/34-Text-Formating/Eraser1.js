import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgEraser1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".eraser-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="eraser-1_svg__a"
      d="M.75 23.248h22.5M16.616 1.626l5.739 5.738a3 3 0 010 4.243l-6.486 6.486a9 9 0 01-12.728 0l-1.5-1.5a3 3 0 010-4.242L12.374 1.626a3 3 0 014.242 0zM8.126 5.874l9.981 9.981"
    />
  );

export default SvgEraser1;
