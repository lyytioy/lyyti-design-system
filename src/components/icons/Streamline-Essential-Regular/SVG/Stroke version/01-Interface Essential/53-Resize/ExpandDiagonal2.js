import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgExpandDiagonal2 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".expand-diagonal-2_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="expand-diagonal-2_svg__a"
      d="M9 14.999l-8.25 8.25M23.25 7.499V.749H16.5M.75 16.499v6.75H7.5M23.25.749L15 8.999M8.25 8.249l7.5 7.5"
    />
  );

export default SvgExpandDiagonal2;
