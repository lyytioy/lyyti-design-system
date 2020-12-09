import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPrintPicture = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".print-picture_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="print-picture_svg__a"
      d="M5.5 16.5h-3a2.006 2.006 0 01-2-2v-6a2.006 2.006 0 012-2h19a2.006 2.006 0 012 2v6a2.006 2.006 0 01-2 2h-3M5.5 4.5v-4h9.586a1 1 0 01.707.293l2.414 2.414a1 1 0 01.293.707V4.5"
    />,
    <path
      className="print-picture_svg__a"
      d="M18.5 22.5a1 1 0 01-1 1h-11a1 1 0 01-1-1v-9h13z"
    />,
    <circle className="print-picture_svg__a" cx={3.5} cy={9.499} r={1} />,
    <path
      className="print-picture_svg__a"
      d="M14.5.499v4h4M16.458 21.499L14.316 16.3 12 19.757l-2.438-2.003-1.937 3.745h8.833zM8.25 15.5a.25.25 0 11-.25.25.249.249 0 01.25-.25"
    />
  );

export default SvgPrintPicture;
