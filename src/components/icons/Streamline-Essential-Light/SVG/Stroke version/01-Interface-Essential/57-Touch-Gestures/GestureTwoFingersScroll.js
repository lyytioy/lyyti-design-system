import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgGestureTwoFingersScroll = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".gesture-two-fingers-scroll_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="gesture-two-fingers-scroll_svg__a"
      d="M11.507.499v4.5M9.007 2.499l2.5-2 2.5 2M11.507 23.499v-4M9.007 21.499l2.5 2 2.5-2M8.5 7a1 1 0 012 0v4.234l1 .244L13 7.183a.93.93 0 011.8.455l-1.3 4.34c1.02.473 2.079.778 1.809 1.946-.13.569-1.1 3.03-1.309 3.576l-5.66.019-3.054-3.612c-1.215-1.855 1.836-2.5 3.217.592z"
    />
  );

export default SvgGestureTwoFingersScroll;
