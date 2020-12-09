import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgShieldKey = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".shield-key_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="shield-key_svg__a"
      d="M2.25 3.923v7.614A11.907 11.907 0 009.882 22.65l1.041.4a3 3 0 002.154 0l1.041-.4a11.907 11.907 0 007.632-11.113V3.923a1.487 1.487 0 00-.868-1.362A21.7 21.7 0 0012 .75a21.7 21.7 0 00-8.882 1.811 1.487 1.487 0 00-.868 1.362z"
    />,
    <path
      className="shield-key_svg__a"
      d="M10.545 12.925a.375.375 0 110 .53.374.374 0 010-.53"
    />,
    <path
      className="shield-key_svg__a"
      d="M14.587 11.71l3.687-3.688a1.624 1.624 0 10-2.3-2.3L12.29 9.413a4.06 4.06 0 102.3 2.3z"
    />
  );

export default SvgShieldKey;
