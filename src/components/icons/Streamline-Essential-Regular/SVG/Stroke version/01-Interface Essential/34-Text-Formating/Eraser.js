import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgEraser = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".eraser_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="eraser_svg__a"
      d="M5.269 18.5L1.05 14.278a1.03 1.03 0 010-1.453L11.217 2.658a1.03 1.03 0 011.453 0l5.447 5.447a1.03 1.03 0 010 1.452L9.23 18.444M4.681 9.194l6.899 6.9M.75 21.498h4.5M12.75 21.498h1.5M17.25 21.498h1.5M21.75 21.498h1.5M8.25 21.498h1.5"
    />
  );

export default SvgEraser;
