import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTextBar = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".text-bar_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="text-bar_svg__a"
      d="M12 4.498v15M6.5.5H8a4 4 0 014 4 4 4 0 014-4h1.5M6.5 23.5H8a4 4 0 004-4 4 4 0 004 4h1.5M9.5 15.498h5"
    />
  );

export default SvgTextBar;
