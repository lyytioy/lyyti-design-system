import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgListNumbers = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".list-numbers_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="list-numbers_svg__a"
      d="M8.25 3.748h15M8.25 12.748h15M8.25 21.748h15M.8 18.36a1.5 1.5 0 111.45 1.888 1.5 1.5 0 11-1.445 1.9M.75 11.248a1.5 1.5 0 011.5-1.5 1.5 1.5 0 011.5 1.5 2.139 2.139 0 01-.468 1.336L.75 14.248h3M.75.748h.75a.75.75 0 01.75.75v5.25M.75 6.748h3"
    />
  );

export default SvgListNumbers;
