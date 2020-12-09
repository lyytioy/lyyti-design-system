import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVipRoyal = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".vip-royal_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="vip-royal_svg__a"
      d="M5.25 14.25V9.81a.75.75 0 011.219-.585L9 11.25l2.47-2.47a.749.749 0 011.06 0L15 11.25l2.531-2.025a.75.75 0 011.219.585v4.44a1.5 1.5 0 01-1.5 1.5H6.75a1.5 1.5 0 01-1.5-1.5z"
    />,
    <circle className="vip-royal_svg__a" cx={12} cy={12} r={11.25} />
  );

export default SvgVipRoyal;
