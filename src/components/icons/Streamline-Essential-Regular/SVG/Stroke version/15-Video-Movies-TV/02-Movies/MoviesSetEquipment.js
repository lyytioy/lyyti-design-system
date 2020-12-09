import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMoviesSetEquipment = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".movies-set-equipment_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="movies-set-equipment_svg__a"
      d="M21.75 21.75H2.25a1.5 1.5 0 01-1.5-1.5v-12h22.5v12a1.5 1.5 0 01-1.5 1.5zM23.25 8.25H.75v-4.5a1.5 1.5 0 011.5-1.5h19.5a1.5 1.5 0 011.5 1.5zM5.25 17.25h13.5M11.25 13.5v3.75M9 2.25l-1.5 6M16.5 2.25l-1.5 6"
    />
  );

export default SvgMoviesSetEquipment;
