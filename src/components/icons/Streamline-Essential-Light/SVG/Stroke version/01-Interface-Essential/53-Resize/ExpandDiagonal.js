import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgExpandDiagonal = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".expand-diagonal_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="expand-diagonal_svg__a"
      d="M20 7.999v-4h-4M4 19.999l16-16M8 19.999H4v-4"
    />
  );

export default SvgExpandDiagonal;
