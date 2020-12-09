import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCursorSelect1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cursor-select-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="cursor-select-1_svg__a"
      d="M16.361 16.353l2.652 6.894 1.591-2.651 2.652-1.591-6.895-2.652zM23.256 23.247l-2.652-2.651M.756 3.747a3 3 0 013-3M3.756 20.247a3 3 0 01-3-3M17.256.747a3 3 0 013 3M20.256 12.747v-4.5M.756 12.747v-4.5M8.256.747h4.5M8.256 20.247h4.5"
    />
  );

export default SvgCursorSelect1;
