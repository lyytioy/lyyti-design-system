import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgExpandHorizontal1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".expand-horizontal-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="expand-horizontal-1_svg__a"
      d="M.5 11.999h23M5.5 16.999l-5-5 5-5M18.5 16.999l5-5-5-5"
    />
  );

export default SvgExpandHorizontal1;
