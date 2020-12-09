import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgGestureDoubleTap = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".gesture-double-tap_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="gesture-double-tap_svg__a"
      d="M10.608 23.248l-3.79-3.093a1.636 1.636 0 01-.565-1.676 1.638 1.638 0 012.321-1.068L9.748 18v-6.75a1.5 1.5 0 011.5-1.5 1.5 1.5 0 011.5 1.5v4.5l1.993.333a3 3 0 012.507 2.959v4.208"
    />,
    <path
      className="gesture-double-tap_svg__a"
      d="M18.876 14.486A8.991 8.991 0 102.248 9.748a8.922 8.922 0 001.69 5.222M15.548 12.748a5.25 5.25 0 10-8.6 0"
    />
  );

export default SvgGestureDoubleTap;
