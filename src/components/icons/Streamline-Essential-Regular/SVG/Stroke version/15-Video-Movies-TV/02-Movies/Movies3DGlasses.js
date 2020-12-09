import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMovies3DGlasses = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".movies-3d-glasses_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="movies-3d-glasses_svg__a"
      d="M21.75 22.125h-6.129a1.5 1.5 0 01-1.06-.439L12 19.125l-2.561 2.561a1.5 1.5 0 01-1.06.439H2.25a1.5 1.5 0 01-1.5-1.5v-7.5a1.5 1.5 0 011.5-1.5h19.5a1.5 1.5 0 011.5 1.5v7.5a1.5 1.5 0 01-1.5 1.5z"
    />,
    <path
      className="movies-3d-glasses_svg__a"
      d="M15.75 19.125h4.5v-4.5h-6l1.5 4.5zM3.75 19.125h4.5l1.5-4.5h-6v4.5zM.958 12.375l3.11-7.743A4.551 4.551 0 018.25 1.875M23.042 12.375l-3.11-7.743a4.551 4.551 0 00-4.182-2.757"
    />
  );

export default SvgMovies3DGlasses;
