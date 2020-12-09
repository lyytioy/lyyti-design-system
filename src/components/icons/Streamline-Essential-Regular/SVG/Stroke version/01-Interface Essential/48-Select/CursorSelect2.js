import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCursorSelect2 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cursor-select-2_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="cursor-select-2_svg__a"
      d="M.751 3.747a3 3 0 013-3M3.751 20.247a3 3 0 01-3-3M17.251.747a3 3 0 013 3M20.251 12.747v-4.5M.751 12.747v-4.5M8.251.747h4.5M8.251 20.247h4.5M14.765 14.762l3.182 8.485 1.591-3.712 3.713-1.591-8.486-3.182z"
    />
  );

export default SvgCursorSelect2;
