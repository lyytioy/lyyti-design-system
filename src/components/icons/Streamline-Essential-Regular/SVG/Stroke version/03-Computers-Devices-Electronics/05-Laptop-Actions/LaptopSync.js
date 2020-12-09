import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLaptopSync = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".laptop-sync_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="laptop-sync_svg__a"
      d="M15 18.75h-3.75v3.75M22.667 19.483a5.572 5.572 0 01-10.74-.733M19.5 15.75h3.75V12M11.833 15.017a5.572 5.572 0 0110.74.733M3 12V2.25A1.5 1.5 0 014.5.75h15a1.5 1.5 0 011.5 1.5v6M9.75 12h-9a3.75 3.75 0 003.75 3.75h3.75"
    />
  );

export default SvgLaptopSync;
