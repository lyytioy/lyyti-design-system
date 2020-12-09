import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgRemove = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".remove_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path className="remove_svg__a" d="M4.5 19.5l15-15M4.5 4.5l15 15" />
  );

export default SvgRemove;
