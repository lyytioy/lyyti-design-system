import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgExpandDiagonal2 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".expand-diagonal-2_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="expand-diagonal-2_svg__a"
      d="M15.5 14.999L9 8.499M.5 23.499l8.5-8.5M.5 19.499v4h4M23.5.499l-8 8M19.5.499h4v4"
    />
  );

export default SvgExpandDiagonal2;
