import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTouchpad = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".touchpad_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="touchpad_svg__a"
      d="M14.62 2.342a7.155 7.155 0 00-9 0M7.5 5.136a4.177 4.177 0 015.25 0M8.62 23.23l-4.5.016a1.5 1.5 0 01-1.5-1.5v-12a1.5 1.5 0 011.5-1.5h14.25a1.5 1.5 0 011.5 1.5v2.98"
    />,
    <path
      className="touchpad_svg__a"
      d="M13.87 23.23l-2.929-2.344a1.638 1.638 0 01-.566-1.676 1.637 1.637 0 012.325-1.067l1.174.587v-5.25a1.5 1.5 0 011.5-1.5 1.5 1.5 0 011.5 1.5v3l1.993.332a3 3 0 012.507 2.959v3.459M2.62 12.73h9"
    />
  );

export default SvgTouchpad;
