import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgInstrumentSaxophone = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".instrument-saxophone_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="instrument-saxophone_svg__a"
      d="M10.067 6.75h1.5M10.067 9.75h1.5M10.067 12.75h1.5M10.249 3.623A5.249 5.249 0 005.567.75h-4.5l1.993.332a3 3 0 012.507 2.959v11.387a7.717 7.717 0 006.764 7.787 7.5 7.5 0 008.236-7.465 3.64 3.64 0 012.012-3.256.641.641 0 00.069-1.106l-6.915-4.611a.75.75 0 00-1.166.625v7.223a1.875 1.875 0 01-3.452 1.015"
    />
  );

export default SvgInstrumentSaxophone;
