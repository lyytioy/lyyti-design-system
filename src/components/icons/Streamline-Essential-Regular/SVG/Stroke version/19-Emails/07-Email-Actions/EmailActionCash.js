import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgEmailActionCash = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".email-action-cash_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="email-action-cash_svg__a"
      d="M19.5 12.88V2.25A1.5 1.5 0 0018 .75H6a1.5 1.5 0 00-1.5 1.5v10.63"
    />,
    <path
      className="email-action-cash_svg__a"
      d="M21.284 11.465a.75.75 0 011.216.587v9.7a1.5 1.5 0 01-1.5 1.5H3a1.5 1.5 0 01-1.5-1.5v-9.7a.75.75 0 011.216-.587l7.431 5.894a3 3 0 003.706 0z"
    />,
    <path
      className="email-action-cash_svg__a"
      d="M10.142 10.844a2.221 2.221 0 001.858.875c1.139 0 2.062-.693 2.062-1.547S13.139 8.626 12 8.626s-2.063-.693-2.063-1.548.924-1.547 2.063-1.547a2.221 2.221 0 011.858.875M12 11.719v1.031M12 4.5v1.031"
    />
  );

export default SvgEmailActionCash;
