import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSearchBar1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".search-bar-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="search-bar-1_svg__a" cx={15.75} cy={13} r={5.25} />,
    <path
      className="search-bar-1_svg__a"
      d="M23.25 20.5l-3.787-3.788M23.25 8.5A5.249 5.249 0 0018 3.25H6a5.25 5.25 0 000 10.5h1.5"
    />
  );

export default SvgSearchBar1;
