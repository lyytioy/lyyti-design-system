import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFlashOff = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".flash-off_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="flash-off_svg__a"
      d="M9.5 6.498l4.5-6-1.5 9H20l-3 4.5M14 17.998l-4 5.5 1.5-9H4l2.5-3.5M.5 1.498l23 21"
    />
  );

export default SvgFlashOff;
