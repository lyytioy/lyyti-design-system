import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgExpand6 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".expand-6_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="expand-6_svg__a"
      d="M10.5 7.5h-5a1 1 0 00-1 1v10a1 1 0 001 1h10a1 1 0 001-1v-4.97M7.5 16.514l12-12M13.5 4.514h6v6"
    />
  );

export default SvgExpand6;
