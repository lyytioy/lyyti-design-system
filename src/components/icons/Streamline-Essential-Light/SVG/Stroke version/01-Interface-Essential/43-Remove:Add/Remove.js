import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgRemove = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".remove_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path className="remove_svg__a" d="M23.5.5l-23 23M23.5 23.5L.5.5" />
  );

export default SvgRemove;
