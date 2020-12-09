import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleWomanFocus = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-woman-focus_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="single-woman-focus_svg__cls-1"
      d="M7.5 23.5h-6a1 1 0 01-1-1v-6M7.5.5h-6a1 1 0 00-1 1v6M16.5 23.5h6a1 1 0 001-1v-6M16.5.5h6a1 1 0 011 1v6M16.37 12.373a4.724 4.724 0 01-.687-2.617V8.685a3.683 3.683 0 10-7.366 0v1.071a4.724 4.724 0 01-.687 2.617"
    />,
    <path
      className="single-woman-focus_svg__cls-1"
      d="M8.317 9.293A4.877 4.877 0 0012 7.605a4.877 4.877 0 003.683 1.688M15.246 9.273a3.25 3.25 0 01-6.492 0M17.5 19.5a5.5 5.5 0 10-11 0z"
    />
  );

export default SvgSingleWomanFocus;
