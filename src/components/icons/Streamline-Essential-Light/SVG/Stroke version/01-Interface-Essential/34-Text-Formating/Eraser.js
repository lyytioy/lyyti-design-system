import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgEraser = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".eraser_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="eraser_svg__a"
      d="M5.316 21.6l-4.109-4.112a1 1 0 010-1.415l9.9-9.9a1 1 0 011.414 0l5.3 5.3a1 1 0 010 1.415l-8.649 8.656M4.743 12.538l6.717 6.717M.5 23.498H7M13.5 23.498h2M9.5 23.498h2M17.5 23.498h2M21.5 23.498h2"
    />
  );

export default SvgEraser;
