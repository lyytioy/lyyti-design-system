import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPrinterView = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".printer-view_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="printer-view_svg__a"
      d="M5.5 16.5h-3a2.006 2.006 0 01-2-2v-6a2.007 2.007 0 012-2h19a2.007 2.007 0 012 2v3M5.5 4.5V1A.5.5 0 016 .5h9.5l3 3v1"
    />,
    <path
      className="printer-view_svg__a"
      d="M11.5 21.5H6a.5.5 0 01-.5-.5v-7.5h6M3.5 9.248a.25.25 0 11-.25.25.25.25 0 01.25-.25M15.5.5V3a.5.5 0 00.5.5h2.5"
    />,
    <circle className="printer-view_svg__a" cx={17.5} cy={17.498} r={4} />,
    <path className="printer-view_svg__a" d="M20.5 20.498l3 3" />
  );

export default SvgPrinterView;
