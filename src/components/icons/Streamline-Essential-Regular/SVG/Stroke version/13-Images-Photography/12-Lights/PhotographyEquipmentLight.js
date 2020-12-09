import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhotographyEquipmentLight = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".photography-equipment-light_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="photography-equipment-light_svg__a"
      x={4.125}
      y={0.75}
      width={15.75}
      height={14.25}
      rx={1}
      ry={1}
    />,
    <path
      className="photography-equipment-light_svg__a"
      d="M22.875 7.5v8.4A2.085 2.085 0 0120.8 18H3.2a2.085 2.085 0 01-2.071-2.1V7.5M10.875 18h3v5.25h-3zM7.5 4.5a.375.375 0 11-.375.375A.375.375 0 017.5 4.5M12 4.5a.375.375 0 11-.375.375A.375.375 0 0112 4.5M16.5 4.5a.375.375 0 11-.375.375.375.375 0 01.375-.375"
    />,
    <path
      className="photography-equipment-light_svg__a"
      d="M7.5 9.75a.375.375 0 11-.375.375.375.375 0 01.375-.375M12 9.75a.375.375 0 11-.375.375A.375.375 0 0112 9.75M16.5 9.75a.375.375 0 11-.375.375.375.375 0 01.375-.375M13.875 21.75h3M16.875 21v1.5"
    />
  );

export default SvgPhotographyEquipmentLight;
