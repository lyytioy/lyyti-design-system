import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAppWindowCash = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".app-window-cash_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="app-window-cash_svg__a"
      x={1.51}
      y={2.253}
      width={21}
      height={19.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="app-window-cash_svg__a"
      d="M1.51 6.753h21M13.885 11.253h-2.033a1.342 1.342 0 00-.5 2.588l2.064.825a1.342 1.342 0 01-.5 2.587h-2.031M12.385 11.253v-.75M12.385 18.003v-.75"
    />
  );

export default SvgAppWindowCash;
