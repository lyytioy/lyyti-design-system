import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgExpandDiagonal = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".expand-diagonal_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="expand-diagonal_svg__a"
      d="M23.25.748l-22.5 22.5M23.25 7.498V.748H16.5M.75 16.498v6.75H7.5"
    />
  );

export default SvgExpandDiagonal;
