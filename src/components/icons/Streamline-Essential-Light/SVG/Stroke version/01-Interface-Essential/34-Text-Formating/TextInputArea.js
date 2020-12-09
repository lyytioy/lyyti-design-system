import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTextInputArea = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".text-input-area_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="text-input-area_svg__a"
      d="M12 4.498v15M6.5.5H8a4 4 0 014 4 4 4 0 014-4h1.5M6.5 23.5H8a4 4 0 004-4 4 4 0 004 4h1.5M9.5 15.498h5M1 12.498v2M2 8.5a1 1 0 00-1 1M4 8.498h2M8 8.498h2M2 18.5a1 1 0 01-1-1M4 18.498h2M8 18.498h2M23 12.498v2M22 8.5a1 1 0 011 1M20 8.498h-2M16 8.498h-2M22 18.5a1 1 0 001-1M20 18.498h-2M16 18.498h-2"
    />
  );

export default SvgTextInputArea;
