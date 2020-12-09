import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgGestureExpand = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".gesture-expand_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="gesture-expand_svg__a"
      d="M14.25 2.998L12 .748l-2.25 2.25M14.25 20.998L12 23.248l-2.25-2.25M3 9.748l-2.25 2.25L3 14.248M21 9.748l2.25 2.25-2.25 2.25M12.75 11.248h-1.5M8.25 17.248V10.5a3.75 3.75 0 017.5 0v6.75"
    />
  );

export default SvgGestureExpand;
