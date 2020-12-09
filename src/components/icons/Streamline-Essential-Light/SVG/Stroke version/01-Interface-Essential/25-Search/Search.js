import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSearch = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".search_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="search_svg__a" cx={8.5} cy={8.5} r={8} />,
    <path className="search_svg__a" d="M14.156 14.156L23.5 23.5" />
  );

export default SvgSearch;
