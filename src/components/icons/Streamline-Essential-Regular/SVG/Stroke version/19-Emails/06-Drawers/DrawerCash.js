import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDrawerCash = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".drawer-cash_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="drawer-cash_svg__a"
      d="M17.168 15.75a5.951 5.951 0 01-10.336 0H3a1.5 1.5 0 00-1.5 1.5v4.5a1.5 1.5 0 001.5 1.5h18a1.5 1.5 0 001.5-1.5v-4.5a1.5 1.5 0 00-1.5-1.5zM19.5 12.75V2.25A1.5 1.5 0 0018 .75H6a1.5 1.5 0 00-1.5 1.5v10.5"
    />,
    <path
      className="drawer-cash_svg__a"
      d="M10.142 10.844a2.221 2.221 0 001.858.875c1.139 0 2.062-.692 2.062-1.547S13.139 8.626 12 8.626s-2.063-.693-2.063-1.548.924-1.547 2.063-1.547a2.221 2.221 0 011.858.875M12 11.719v1.031M12 4.5v1.031"
    />
  );

export default SvgDrawerCash;
