import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleManCircle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-man-circle_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="single-man-circle_svg__cls-1"
      d="M10 15s-1.5-.5-1.5-3c-.826 0-.826-2 0-2 0-.335-1.5-4 1-3.5.5-2 6-2 6.5 0 .347 1.388-.5 3.254-.5 3.5.826 0 .826 2 0 2 0 2.5-1.5 3-1.5 3v2.5c2.477.929 4.93 1.7 6.185 2.575a11.5 11.5 0 10-16.36.012c1.33-.92 3.952-1.746 6.175-2.587zM3.825 20.087a11.495 11.495 0 0016.36-.012"
    />
  );

export default SvgSingleManCircle;
