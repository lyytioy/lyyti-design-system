import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSearchRemove = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".search-remove_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="search-remove_svg__a"
      d="M18.875 9.812A9.063 9.063 0 119.813.75a9.062 9.062 0 019.062 9.062zM6.568 6.568l6.364 6.364M6.568 12.932l6.364-6.364M16.221 16.22l7.029 7.03"
    />
  );

export default SvgSearchRemove;
