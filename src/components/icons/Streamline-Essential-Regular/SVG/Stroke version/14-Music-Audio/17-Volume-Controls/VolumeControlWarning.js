import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVolumeControlWarning = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".volume-control-warning_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="volume-control-warning_svg__a"
      d="M14.25 8.25v-6a1.5 1.5 0 00-2.4-1.2l-6.6 4.2h-3a1.5 1.5 0 00-1.5 1.5v3a1.5 1.5 0 001.5 1.5h3l4.626 2.944M17.25 20.25a.375.375 0 11-.375.375.375.375 0 01.375-.375M17.25 18v-3"
    />,
    <path
      className="volume-control-warning_svg__a"
      d="M23.063 20.682a1.774 1.774 0 01-1.587 2.568h-8.452a1.774 1.774 0 01-1.587-2.568l4.226-8.451a1.774 1.774 0 013.174 0z"
    />
  );

export default SvgVolumeControlWarning;
