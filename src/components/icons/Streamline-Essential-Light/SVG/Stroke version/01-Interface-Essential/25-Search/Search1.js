import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSearch1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".search-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="search-1_svg__a" cx={10.5} cy={10.5} r={10} />,
    <path className="search-1_svg__a" d="M23.5 23.5l-5.929-5.929" />
  );

export default SvgSearch1;
