import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgBookPin = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".book-pin_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="book-pin_svg__a"
      d="M22 .5H5a2 2 0 000 4h16a1 1 0 011 1v17a1 1 0 01-1 1H5a2 2 0 01-2-2v-19M5 2.5h16M2 7.5h2M2 10.5h2M2 13.5h2M2 16.5h2M2 19.5h2"
    />,
    <circle className="book-pin_svg__a" cx={12.496} cy={12} r={1.5} />,
    <path
      className="book-pin_svg__a"
      d="M17 12c0 3-4.5 7.5-4.5 7.5S8 15 8 12a4.5 4.5 0 119 0z"
    />
  );

export default SvgBookPin;
