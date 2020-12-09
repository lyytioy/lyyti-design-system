import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhotographyEquipmentBattery = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".photography-equipment-battery_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="photography-equipment-battery_svg__a"
      d="M13.5 3.75V3M15.75 3.75V3M18.75 4.5V2.25a1.5 1.5 0 00-1.5-1.5H12a1.5 1.5 0 00-1.5 1.5V4.5h-6A1.5 1.5 0 003 6v15.75a1.5 1.5 0 001.5 1.5h15a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5z"
    />,
    <path
      className="photography-equipment-battery_svg__a"
      d="M13.5 9l-5.14 5.36a.375.375 0 00.265.64h2.625v4.5l4.83-5.36a.375.375 0 00-.266-.64H13.5z"
    />
  );

export default SvgPhotographyEquipmentBattery;
