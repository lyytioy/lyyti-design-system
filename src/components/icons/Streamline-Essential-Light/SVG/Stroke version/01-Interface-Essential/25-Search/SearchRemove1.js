import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSearchRemove1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".search-remove-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path className="search-remove-1_svg__a" d="M7 7l7 7M14 7l-7 7" />,
    <circle className="search-remove-1_svg__a" cx={10.5} cy={10.5} r={10} />,
    <path className="search-remove-1_svg__a" d="M23.5 23.5l-5.929-5.929" />
  );

export default SvgSearchRemove1;
