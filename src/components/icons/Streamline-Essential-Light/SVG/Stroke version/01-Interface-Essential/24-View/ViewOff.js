import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgViewOff = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".view-off_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="view-off_svg__a"
      d="M19.518 8.288A22.111 22.111 0 0123.5 12s-5.148 6.5-11.5 6.5a10.3 10.3 0 01-3-.464M4.468 15.7A22.105 22.105 0 01.5 12S5.648 5.5 12 5.5a10.106 10.106 0 012.5.325M8 12a4 4 0 014-4M16 12a4 4 0 01-4 4M21.75 2.25l-19.5 19.5"
    />
  );

export default SvgViewOff;
