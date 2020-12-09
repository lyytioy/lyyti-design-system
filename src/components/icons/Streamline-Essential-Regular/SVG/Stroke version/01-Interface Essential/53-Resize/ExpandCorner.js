import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgExpandCorner = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".expand-corner_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="expand-corner_svg__a"
      d="M.752 18.748l4.5 4.5 4.5-4.5M18.752.748l4.5 4.5-4.5 4.5"
    />,
    <path
      className="expand-corner_svg__a"
      d="M23.252 5.248h-16.5a1.5 1.5 0 00-1.5 1.5v16.5"
    />
  );

export default SvgExpandCorner;
