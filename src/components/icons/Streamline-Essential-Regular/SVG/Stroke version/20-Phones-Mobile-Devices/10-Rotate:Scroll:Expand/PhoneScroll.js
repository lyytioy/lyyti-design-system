import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneScroll = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phone-scroll_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="phone-scroll_svg__a"
      d="M15.751 15l-1.674-1.255a1.569 1.569 0 00-2.246.385 1.569 1.569 0 000 1.74l1.644 2.467a4.5 4.5 0 002.073 1.682L18 21v2.25M15 9.75l3.6 1.541a4.5 4.5 0 012.364 2.364l1.173 2.745a4.5 4.5 0 01.364 1.773v5.077"
    />,
    <path
      className="phone-scroll_svg__a"
      d="M15 14.438V3.75a3 3 0 00-3-3H4.5a3 3 0 00-3 3v16.5a3 3 0 003 3H12a3 3 0 003-3v-.5M13.787 18.75H1.501"
    />,
    <path
      className="phone-scroll_svg__a"
      d="M5.251 11.25l3 3 3-3M8.251 14.25V3.75M5.251 6.75l3-3 3 3"
    />
  );

export default SvgPhoneScroll;
