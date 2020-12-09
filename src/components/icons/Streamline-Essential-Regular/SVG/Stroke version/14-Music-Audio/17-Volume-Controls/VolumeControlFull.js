import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVolumeControlFull = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".volume-control-full_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="volume-control-full_svg__a"
      d="M14.171 4.658A1.5 1.5 0 0012.6 4.8L6 9H3a1.5 1.5 0 00-1.5 1.5v3A1.5 1.5 0 003 15h3l6.6 4.2A1.5 1.5 0 0015 18V6a1.5 1.5 0 00-.829-1.342zM21.463 15.75a6.6 6.6 0 000-7.1M18.562 14.441a3.493 3.493 0 000-4.405M6 9v6"
    />
  );

export default SvgVolumeControlFull;
