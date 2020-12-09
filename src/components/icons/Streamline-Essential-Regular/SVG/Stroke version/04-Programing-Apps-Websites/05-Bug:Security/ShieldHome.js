import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgShieldHome = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".shield-home_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="shield-home_svg__a"
      d="M2.25 3.923v7.614A11.907 11.907 0 009.882 22.65l1.041.4a3 3 0 002.154 0l1.041-.4a11.907 11.907 0 007.632-11.113V3.923a1.487 1.487 0 00-.868-1.362A21.7 21.7 0 0012 .75a21.7 21.7 0 00-8.882 1.811 1.487 1.487 0 00-.868 1.362z"
    />,
    <path
      className="shield-home_svg__a"
      d="M7.5 8.448v5.8A1.5 1.5 0 009 15.75h6a1.5 1.5 0 001.5-1.5v-5.8"
    />,
    <path
      className="shield-home_svg__a"
      d="M6 9.76l4.518-3.953a2.249 2.249 0 012.964 0L18 9.76M13.5 15.75h-3v-3a1.5 1.5 0 013 0z"
    />
  );

export default SvgShieldHome;
