import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPrinterView = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".printer-view_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="printer-view_svg__a"
      d="M5.25 17.248h-3a1.5 1.5 0 01-1.5-1.5v-7.5a1.5 1.5 0 011.5-1.5h19.5a1.5 1.5 0 011.5 1.5v6M3.75 9.748h.75"
    />,
    <path
      className="printer-view_svg__a"
      d="M13.5 23.248H5.25v-10.5h3M18.75 6.748H5.25v-4.5a1.5 1.5 0 011.5-1.5h10.5a1.5 1.5 0 011.5 1.5z"
    />,
    <circle className="printer-view_svg__a" cx={15.75} cy={15.748} r={5.25} />,
    <path className="printer-view_svg__a" d="M23.25 23.248l-3.788-3.788" />
  );

export default SvgPrinterView;
