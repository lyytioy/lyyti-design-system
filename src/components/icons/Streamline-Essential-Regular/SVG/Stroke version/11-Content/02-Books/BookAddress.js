import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgBookAddress = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".book-address_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="book-address_svg__a"
      d="M21 23.25H5.25A2.25 2.25 0 013 21M6 .75a3 3 0 00-3 3V21a2.25 2.25 0 012.25-2.25h15A.75.75 0 0021 18V1.5a.75.75 0 00-.75-.75zM19.5 23.25v-4.5"
    />,
    <path className="book-address_svg__a" d="M7.5 15.75a4.5 4.5 0 019 0z" />,
    <circle className="book-address_svg__a" cx={12} cy={8.25} r={3} />
  );

export default SvgBookAddress;
