import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhotographyEquipmentRetroFilm = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".photography-equipment-retro-film_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="photography-equipment-retro-film_svg__a"
      d="M2.25 3.75h9v16.5h-9zM.75 3.75h12M.75 20.25h12M22.5 13.5h.75v-6a.75.75 0 00-.75-.75H11.25v10.5h8.25v-.75a3 3 0 013-3z"
    />
  );

export default SvgPhotographyEquipmentRetroFilm;
