import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSynchronizeArrowsSquare = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".synchronize-arrows-square_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="synchronize-arrows-square_svg__a"
      d="M10.5 19.747h6.75a3 3 0 003-3v-9a3 3 0 00-3-3h-.75M13.5 4.747H6.75a3 3 0 00-3 3v9a3 3 0 003 3h.75"
    />,
    <path
      className="synchronize-arrows-square_svg__a"
      d="M14.25 15.997l-3.75 3.75 3.75 3.75M9.75 8.497l3.75-3.75L9.75.997"
    />
  );

export default SvgSynchronizeArrowsSquare;
