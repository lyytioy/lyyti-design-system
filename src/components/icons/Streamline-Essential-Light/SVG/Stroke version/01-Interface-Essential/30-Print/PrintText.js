import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPrintText = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".print-text_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="print-text_svg__a"
      d="M7.5 19.499h9M7.5 16.499h9M5.5 16.5h-3a2.006 2.006 0 01-2-2v-6a2.006 2.006 0 012-2h19a2.006 2.006 0 012 2v6a2.006 2.006 0 01-2 2h-3M5.5 4.5v-4h9.586a1 1 0 01.707.293l2.414 2.414a1 1 0 01.293.707V4.5"
    />,
    <path
      className="print-text_svg__a"
      d="M18.5 22.5a1 1 0 01-1 1h-11a1 1 0 01-1-1v-9h13z"
    />,
    <circle className="print-text_svg__a" cx={3.5} cy={9.499} r={1} />,
    <path className="print-text_svg__a" d="M14.5.499v4h4" />
  );

export default SvgPrintText;
