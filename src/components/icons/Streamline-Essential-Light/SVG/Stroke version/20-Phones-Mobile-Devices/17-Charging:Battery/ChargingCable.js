import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgChargingCable = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".charging-cable_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="charging-cable_svg__a"
      d="M13.5 1.5L9 7.5h3.5v4l5-6h-4v-4zM.5 4.5h6v5a2 2 0 01-2 2h-2a2 2 0 01-2-2v-5zM1.5.5h4v4h-4z"
    />,
    <circle className="charging-cable_svg__a" cx={12.5} cy={18.5} r={5} />,
    <path
      className="charging-cable_svg__a"
      d="M19.5 6.5h4v4a1 1 0 01-1 1h-2a1 1 0 01-1-1v-4zM20.5 3.5h2v3h-2zM21.5 11.5v3a9 9 0 01-18 0v-3"
    />
  );

export default SvgChargingCable;
