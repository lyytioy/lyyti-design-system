import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleNeutralActionsWarning = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-neutral-actions-warning_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="single-neutral-actions-warning_svg__cls-1"
      d="M17.5 20.5a.25.25 0 11-.25.25.25.25 0 01.25-.25M17.5 18.5v-3"
    />,
    <path
      className="single-neutral-actions-warning_svg__cls-1"
      d="M18.338 12.5a.949.949 0 00-1.676 0l-5.056 9.634a.923.923 0 00.031.914.948.948 0 00.807.448h10.112a.948.948 0 00.807-.448.923.923 0 00.031-.914zM12 16.5H.5a8.722 8.722 0 01.7-3.322c.49-.981 2.539-1.661 5.111-2.613.695-.258.581-2.073.273-2.412a5.131 5.131 0 01-1.34-3.979A3.354 3.354 0 018.5.5a3.354 3.354 0 013.256 3.674 5.131 5.131 0 01-1.336 3.979c-.308.339-.422 2.154.273 2.412 1.273.471 2.417.876 3.308 1.283"
    />
  );

export default SvgSingleNeutralActionsWarning;
