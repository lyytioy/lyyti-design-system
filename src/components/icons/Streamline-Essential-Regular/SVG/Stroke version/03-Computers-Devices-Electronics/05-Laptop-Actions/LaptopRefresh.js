import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLaptopRefresh = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".laptop-refresh_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="laptop-refresh_svg__a"
      d="M19.5 15.75h3.75v-4.5M23.061 15.75a6 6 0 10-1.121 5.243M3 12V2.25A1.5 1.5 0 014.5.75h15a1.5 1.5 0 011.5 1.5v6M9.75 12h-9a3.75 3.75 0 003.75 3.75h3.75"
    />
  );

export default SvgLaptopRefresh;
