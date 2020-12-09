import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCursorSelect1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cursor-select-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="cursor-select-1_svg__a"
      d="M23.5 23.498l-5.5-5.5M16.047 20.4a.5.5 0 00.922.007L18 18l2.406-1.031a.5.5 0 00-.007-.922l-6.29-2.59a.5.5 0 00-.653.653zM.5 3.498v2M.5 7.498v2M.5 11.498v2M16.5 3.498v2M16.5 7.498v2M.5 15.5a1 1 0 001 1M1.5.5a1 1 0 00-1 1M3.5.498h2M7.5.498h2M3.5 16.498h2M7.5 16.498h2M11.5.498h2M15.5.5a1 1 0 011 1"
    />
  );

export default SvgCursorSelect1;
