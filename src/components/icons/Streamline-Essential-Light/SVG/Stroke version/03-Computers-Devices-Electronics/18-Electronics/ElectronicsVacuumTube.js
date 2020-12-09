import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgElectronicsVacuumTube = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".electronics-vacuum-tube_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="electronics-vacuum-tube_svg__a"
      d="M7 6.5h10v12a2 2 0 01-2 2H9a2 2 0 01-2-2v-12zM7 15.5h10M15 2.5h-1a1 1 0 01-1-1 1 1 0 00-2 0 1 1 0 01-1 1H9a2 2 0 00-2 2v2h10v-2a2 2 0 00-2-2z"
    />,
    <path
      className="electronics-vacuum-tube_svg__a"
      d="M11 6.5v3h3M14 6.5v9M10 15.5v-3h4M9 20.5v3M11 20.5v3M13 20.5v3M15 20.5v3"
    />
  );

export default SvgElectronicsVacuumTube;
