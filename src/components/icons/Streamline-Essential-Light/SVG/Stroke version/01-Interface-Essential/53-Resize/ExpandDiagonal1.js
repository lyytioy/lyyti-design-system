import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgExpandDiagonal1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".expand-diagonal-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="expand-diagonal-1_svg__a"
      d="M10.5 20.499h-7v-7M20.5 10.499v-7h-7M3.5 20.499l17-17"
    />
  );

export default SvgExpandDiagonal1;
