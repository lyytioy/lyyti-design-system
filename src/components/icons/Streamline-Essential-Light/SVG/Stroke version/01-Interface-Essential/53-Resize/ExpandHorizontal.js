import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgExpandHorizontal = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".expand-horizontal_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="expand-horizontal_svg__a"
      d="M20.5 14.999l3-3-3-3M.5 11.999h23M3.5 14.999l-3-3 3-3"
    />
  );

export default SvgExpandHorizontal;
