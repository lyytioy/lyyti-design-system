import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCursorSelect = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cursor-select_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="cursor-select_svg__a"
      d="M14.5 5.998v17.5M23.5 14.498H6M9 11.498l-3 3 3 3M11.5 20.498l3 3 3-3M20.5 17.498l3-3-3-3M17.5 8.998l-3-3-3 3M5.711 9.1a.5.5 0 01-.933.1L1.053 1.753a.5.5 0 01.671-.671l7.449 3.725a.5.5 0 01-.1.933l-2.689.672z"
    />
  );

export default SvgCursorSelect;
