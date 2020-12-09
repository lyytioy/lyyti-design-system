import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgExpandDiagonal3 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".expand-diagonal-3_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="expand-diagonal-3_svg__a"
      d="M15.003 14.998l8.25 8.25M.753 7.498V.748h6.75M23.253 16.498v6.75h-6.75M.753.748l8.25 8.25M15.753 8.248l-7.5 7.5"
    />
  );

export default SvgExpandDiagonal3;
