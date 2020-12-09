import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhotographyEquipmentBattery = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".photography-equipment-battery_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="photography-equipment-battery_svg__a"
      d="M18.5 4.5h-1v-3a1 1 0 00-1-1h-4a1 1 0 00-1 1v3h-6a2 2 0 00-2 2v15a2 2 0 002 2h13a2 2 0 002-2v-15a2 2 0 00-2-2zM13.5 4.5v-2M15.5 4.5v-2"
    />,
    <path
      className="photography-equipment-battery_svg__a"
      d="M9 15.5h1.5v4l4.88-6.175A.5.5 0 0015 12.5h-1.5v-4l-4.88 6.175A.5.5 0 009 15.5z"
    />
  );

export default SvgPhotographyEquipmentBattery;
