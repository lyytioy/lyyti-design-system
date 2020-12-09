import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPrintPicture = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".print-picture_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="print-picture_svg__a"
      d="M5.25 17.249h-3a1.5 1.5 0 01-1.5-1.5v-7.5a1.5 1.5 0 011.5-1.5h19.5a1.5 1.5 0 011.5 1.5v7.5a1.5 1.5 0 01-1.5 1.5h-3M3.75 9.749h1.5"
    />,
    <path
      className="print-picture_svg__a"
      d="M5.25 12.749h13.5v10.5H5.25zM18.75 6.749H5.25v-4.5a1.5 1.5 0 011.5-1.5h10.5a1.5 1.5 0 011.5 1.5z"
    />,
    <path
      className="print-picture_svg__a"
      d="M8.25 20.249l1.5-2.25 1.5 2.25 2.25-4.5 2.25 4.5"
    />
  );

export default SvgPrintPicture;
