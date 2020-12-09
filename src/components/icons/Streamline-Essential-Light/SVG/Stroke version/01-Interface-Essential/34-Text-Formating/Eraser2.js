import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgEraser2 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".eraser-2_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="eraser-2_svg__a"
      d="M4 23.498h15M11.632 18.069a.5.5 0 01-.707 0l-6.364-6.364a.5.5 0 010-.707l9.526-9.526a1 1 0 011.415 0l5.656 5.657a1 1 0 010 1.414zM3 20.5a1.267 1.267 0 01-.831-.374L1.086 18.9a2.112 2.112 0 010-2.92l3.828-3.875 5.775 5.729L8.5 20.136a1.337 1.337 0 01-.844.362z"
    />
  );

export default SvgEraser2;
