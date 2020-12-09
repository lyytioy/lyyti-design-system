import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgExpandDiagonal3 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".expand-diagonal-3_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="expand-diagonal-3_svg__a"
      d="M8.5 14.999l6.5-6.5M23.5 23.499l-8.5-8.5M23.5 19.499v4h-4M.5.499l8 8M4.5.499h-4v4"
    />
  );

export default SvgExpandDiagonal3;
