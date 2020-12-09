import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgExpandHorizontal = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".expand-horizontal_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="expand-horizontal_svg__a"
      d="M.75 11.998h22.5M4.5 8.248l-3.75 3.75 3.75 3.75M19.5 8.248l3.75 3.75-3.75 3.75"
    />
  );

export default SvgExpandHorizontal;
