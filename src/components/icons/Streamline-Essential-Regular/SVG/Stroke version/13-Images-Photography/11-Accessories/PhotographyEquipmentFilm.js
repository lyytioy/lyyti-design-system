import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhotographyEquipmentFilm = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".photography-equipment-film_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="photography-equipment-film_svg__a"
      x={0.75}
      y={3.75}
      width={12}
      height={19.5}
      rx={1}
      ry={1}
    />,
    <path
      className="photography-equipment-film_svg__a"
      d="M5.5.75H8a1 1 0 011 1v2H4.5v-2a1 1 0 011-1zM4.5 7.5v15.75M.75 7.5h12M12.75 5.25h9a1.5 1.5 0 011.5 1.5v3.75a1.5 1.5 0 01-1.5 1.5 4.5 4.5 0 00-4.5 4.5v3.75a1.5 1.5 0 01-1.5 1.5h-3"
    />,
    <path
      className="photography-equipment-film_svg__a"
      d="M16.125 8.25a.375.375 0 11-.375.375.375.375 0 01.375-.375M19.875 8.25a.375.375 0 11-.375.375.375.375 0 01.375-.375"
    />
  );

export default SvgPhotographyEquipmentFilm;
