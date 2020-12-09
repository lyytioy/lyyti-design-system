import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgExpandHorizontalLeftRight = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".expand-horizontal-left-right_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="expand-horizontal-left-right_svg__a"
      d="M14.5.499v23M10.5.499v23M23.5 12.499h-9M10.5 12.499H.5M20.5 15.499l3-3-3-3M3.5 15.499l-3-3 3-3"
    />
  );

export default SvgExpandHorizontalLeftRight;
