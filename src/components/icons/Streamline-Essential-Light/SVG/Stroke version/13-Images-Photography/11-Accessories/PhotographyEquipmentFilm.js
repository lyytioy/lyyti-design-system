import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhotographyEquipmentFilm = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".photography-equipment-film_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="photography-equipment-film_svg__a"
      x={0.5}
      y={3.5}
      width={13}
      height={20}
      rx={1}
      ry={1}
    />,
    <path
      className="photography-equipment-film_svg__a"
      d="M5.5.5h3a1 1 0 011 1v2h-5v-2a1 1 0 011-1zM3.5 7.5v16M.5 7.5h13M13.5 4.5h9a1 1 0 011 1v6a1.079 1.079 0 01-.918 1.068A6 6 0 0017.5 18.5v3a1 1 0 01-1 1h-3zM17 7.467v.516M20 7.467v.516"
    />
  );

export default SvgPhotographyEquipmentFilm;
