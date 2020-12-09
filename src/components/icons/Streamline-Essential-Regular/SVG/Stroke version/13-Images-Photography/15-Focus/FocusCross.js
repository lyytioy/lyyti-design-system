import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFocusCross = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".focus-cross_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="focus-cross_svg__a"
      d="M9.75 9.75h4.5v4.5h-4.5zM.75 9.75h4.5v4.5H.75zM18.75 9.75h4.5v4.5h-4.5zM9.75.75h4.5v4.5h-4.5zM9.75 18.75h4.5v4.5h-4.5zM.75 4.5V2.25a1.5 1.5 0 011.5-1.5H4.5M23.25 4.5V2.25a1.5 1.5 0 00-1.5-1.5H19.5M.75 19.5v2.25a1.5 1.5 0 001.5 1.5H4.5M23.25 19.5v2.25a1.5 1.5 0 01-1.5 1.5H19.5"
    />
  );

export default SvgFocusCross;
