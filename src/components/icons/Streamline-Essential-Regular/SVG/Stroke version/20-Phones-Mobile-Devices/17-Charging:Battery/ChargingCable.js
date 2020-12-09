import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgChargingCable = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".charging-cable_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="charging-cable_svg__a"
      d="M2.25.75h4.5v4.5h-4.5zM8.25 5.25H.75v4.5a1.5 1.5 0 001.5 1.5h4.5a1.5 1.5 0 001.5-1.5zM18.75 3.75h3v3h-3zM23.25 6.75h-6v3a1.5 1.5 0 001.5 1.5h3a1.5 1.5 0 001.5-1.5zM20.25 11.25v4.125a7.875 7.875 0 01-15.75 0V11.25"
    />,
    <circle className="charging-cable_svg__a" cx={12} cy={18} r={5.25} />,
    <path
      className="charging-cable_svg__a"
      d="M13.5.75L12 2.25l2.25 1.5-1.5 1.5"
    />
  );

export default SvgChargingCable;
