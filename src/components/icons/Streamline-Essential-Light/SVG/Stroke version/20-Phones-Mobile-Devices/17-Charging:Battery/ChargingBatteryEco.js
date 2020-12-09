import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgChargingBatteryEco = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".charging-battery-eco_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="charging-battery-eco_svg__a"
      d="M10 17.5h9.5a1 1 0 001-1v-2h2a1 1 0 001-1v-3a1 1 0 00-1-1h-2v-2a1 1 0 00-1-1H18M7 6.5H1.5a1 1 0 00-1 1v9a1 1 0 001 1H3"
    />,
    <path
      className="charging-battery-eco_svg__a"
      d="M8.4 8.1c-1.7 1.047-2.46 2.683.388 4.455.291 3.342 1.914 3.519 3.8 2.363s3.8-5.264 3.345-7.918c-2.819 1.144-5.404-.2-7.533 1.1zM4.913 17.179s4.461-6.661 8.27-7.525"
    />
  );

export default SvgChargingBatteryEco;
