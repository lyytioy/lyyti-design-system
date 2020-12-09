import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCursorSelect = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cursor-select_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="cursor-select_svg__a"
      d="M12 7.497l2.25-2.25 2.25 2.25M16.5 20.997l-2.25 2.25-2.25-2.25M14.25 5.247v18M21 11.997l2.25 2.25-2.25 2.25M7.5 16.497l-2.25-2.25 2.25-2.25M23.25 14.247h-18M.75.747l3.182 8.486L5.523 5.52l3.712-1.591L.75.747z"
    />
  );

export default SvgCursorSelect;
