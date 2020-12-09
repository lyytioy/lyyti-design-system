import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMoviesSetEquipment = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".movies-set-equipment_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="movies-set-equipment_svg__a"
      x={0.5}
      y={3.5}
      width={23}
      height={17}
      rx={1}
      ry={1}
    />,
    <path
      className="movies-set-equipment_svg__a"
      d="M.5 9.5h23M.5 6.5h23M5 3.5l3 3-3 3M11 3.5l3 3-3 3M17 3.5l3 3-3 3M3.5 17.5h17M12.5 15.5v-2"
    />
  );

export default SvgMoviesSetEquipment;
