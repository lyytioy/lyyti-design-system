import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSearchRemove = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".search-remove_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="search-remove_svg__a" cx={8.5} cy={8.5} r={8} />,
    <path
      className="search-remove_svg__a"
      d="M14.167 14.167L23.5 23.5M6 6l5 5M11 6l-5 5"
    />
  );

export default SvgSearchRemove;
