import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgGestureZoomOut = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".gesture-zoom-out_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="gesture-zoom-out_svg__a"
      d="M3.939 15.715l1.461-.342M10.32 23.248l-2.169-9.287a3.75 3.75 0 00-7.3 1.705l1.771 7.582M20.057 15.715l-1.46-.342M21.379 23.248l1.77-7.582a3.75 3.75 0 10-7.3-1.7l-2.169 9.287M19.458 6.649l3.79-1.906-1.906-3.79M23.248 4.764a26.941 26.941 0 00-9-2.353M4.539 6.649L.748 4.743 2.654.953M.748 4.764a26.953 26.953 0 019-2.353"
    />
  );

export default SvgGestureZoomOut;
