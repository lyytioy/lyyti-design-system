import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgItalicOff = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".italic-off_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="italic-off_svg__a"
      d="M.5.498l23 23M5.5.5h16.613a1 1 0 01.948 1.316L22.5 3.5M10.246 14.475L7.5 23.498M14.5.498l-2.277 7.484M4 23.498h7"
    />
  );

export default SvgItalicOff;
