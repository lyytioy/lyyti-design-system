import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCsv = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".csv_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="csv_svg__a"
      d="M1.502 3.753h21M1.502 20.253h21M7.5 8.253a3 3 0 00-3 3v1.5a3 3 0 003 3M13.5 8.253H12a1.5 1.5 0 00-1.5 1.5c0 2.25 3 2.25 3 4.5a1.5 1.5 0 01-1.5 1.5h-1.5M16.5 8.253V10.8a8.929 8.929 0 001.5 4.953 8.929 8.929 0 001.5-4.953V8.253"
    />
  );

export default SvgCsv;
