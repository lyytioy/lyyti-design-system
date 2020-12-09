import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgElectronicsVacuumTube = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".electronics-vacuum-tube_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="electronics-vacuum-tube_svg__a"
      d="M15 3.75a1.486 1.486 0 01-1.5-1.481 1.5 1.5 0 10-3 0A1.486 1.486 0 019 3.75 2.25 2.25 0 006.75 6v10.5A2.25 2.25 0 009 18.75h6a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0015 3.75zM9 18.75v4.5M15 18.75v4.5M12 18.75v4.5M6.75 14.25h10.5M6.75 6.75h10.5M14.25 14.25v-7.5"
    />,
    <path
      className="electronics-vacuum-tube_svg__a"
      d="M9.75 9.75h4.5v4.5h-4.5z"
    />
  );

export default SvgElectronicsVacuumTube;
