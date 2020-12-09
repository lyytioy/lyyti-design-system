import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgBill = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".bill_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      d="M8.63 6.75H6.77A1.28 1.28 0 005.55 8.1a1.34 1.34 0 00.76 1.24l1.89.83a1.39 1.39 0 01.68 1.74 1.24 1.24 0 01-1.14.84H5.89"
      transform="translate(-.99)"
      className="bill_svg__a"
    />,
    <path className="bill_svg__a" d="M6.27 6.75V6M6.27 13.5v-.75" />,
    <path
      d="M10.66 23H3.52a1.75 1.75 0 01-1.78-1.71V2.47A1.75 1.75 0 013.52.75h12.65a1.82 1.82 0 011.26.5l3.42 3.28a1.71 1.71 0 01.53 1.21v3.57"
      transform="translate(-.99)"
      className="bill_svg__a"
    />,
    <path
      className="bill_svg__a"
      d="M20.39 9.31V23M8.67 23h10.72M5.03 17.75H16.1M11.03 14h4.6"
    />
  );

export default SvgBill;
