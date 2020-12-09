import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTrendsHotFlame = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".trends-hot-flame_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="trends-hot-flame_svg__a"
      d="M16.846 14.222a4.338 4.338 0 01-4.154 4.5M12 23.222c-4.615 0-9-3.358-9-7.5a7.658 7.658 0 014.94-7.287.375.375 0 01.515.382A4.814 4.814 0 0010.1 13.1a.749.749 0 00.992-.021c1.32-1.217 4.557-5.237-1.223-11.676a.375.375 0 01.324-.623C15.621 1.447 21 7.571 21 13.472c0 5-3 9.75-9 9.75z"
    />
  );

export default SvgTrendsHotFlame;
