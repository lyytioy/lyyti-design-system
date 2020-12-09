import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMouse = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".mouse_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="mouse_svg__a"
      d="M6.75 23.25a6 6 0 01-6-6v-6a6 6 0 016-6 6 6 0 016 6v6a6 6 0 01-6 6zM.75 12.75h12"
    />,
    <path
      className="mouse_svg__a"
      d="M6.75 12.75v-7.5a4.5 4.5 0 014.5-4.5 4.5 4.5 0 014.5 4.5V7.5a3.75 3.75 0 003.75 3.75 3.75 3.75 0 003.75-3.75V.75"
    />
  );

export default SvgMouse;
