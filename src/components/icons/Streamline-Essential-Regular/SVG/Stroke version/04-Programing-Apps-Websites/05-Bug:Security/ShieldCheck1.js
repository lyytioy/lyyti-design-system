import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgShieldCheck1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".shield-check-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="shield-check-1_svg__a"
      d="M2.25 3.923v7.614A11.907 11.907 0 009.882 22.65l1.041.4a3 3 0 002.154 0l1.041-.4a11.907 11.907 0 007.632-11.113V3.923a1.487 1.487 0 00-.868-1.362A21.7 21.7 0 0012 .75a21.7 21.7 0 00-8.882 1.811 1.487 1.487 0 00-.868 1.362zM17.2 11.25a5.25 5.25 0 11-5.2-6"
    />,
    <path
      className="shield-check-1_svg__a"
      d="M17.25 6.562l-4.786 4.786a.657.657 0 01-.928 0l-1.5-1.505"
    />
  );

export default SvgShieldCheck1;
