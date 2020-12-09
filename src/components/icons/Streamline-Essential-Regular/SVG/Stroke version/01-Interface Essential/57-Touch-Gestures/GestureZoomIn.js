import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgGestureZoomIn = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".gesture-zoom-in_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="gesture-zoom-in_svg__a"
      d="M3.94 15.715l1.46-.342M10.32 23.248l-2.169-9.287a3.75 3.75 0 00-7.3 1.705l1.77 7.582M20.057 15.715l-1.46-.342M21.379 23.248l1.77-7.582a3.75 3.75 0 10-7.3-1.7l-2.169 9.287M6.561 6.748l2.645-3.317L5.888.786M9.206 3.444A35.959 35.959 0 00.749 5.133M17.436 6.748l-2.645-3.317L18.109.786M14.791 3.444a35.977 35.977 0 018.458 1.689"
    />
  );

export default SvgGestureZoomIn;
