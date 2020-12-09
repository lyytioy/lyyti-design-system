import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgHouse2 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".house-2_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="house-2_svg__a"
      d="M1.458 12.171l9.435-9.443a1.5 1.5 0 012.122.007l9.443 9.436"
    />,
    <path className="house-2_svg__a" d="M19.458 9.173v11.998h-15V9.168" />,
    <path className="house-2_svg__a" d="M14.958 21.171v-4.5a3 3 0 00-6 0v4.5" />
  );

export default SvgHouse2;
