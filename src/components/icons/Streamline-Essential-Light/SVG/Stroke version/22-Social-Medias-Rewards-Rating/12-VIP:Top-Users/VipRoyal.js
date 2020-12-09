import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVipRoyal = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".vip-royal_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="vip-royal_svg__a" cx={12} cy={12} r={11.5} />,
    <path
      className="vip-royal_svg__a"
      d="M5.5 15a1 1 0 001 1H18a1 1 0 001-1V9.6a.5.5 0 00-.829-.376L15 12l-2.62-3.057a.5.5 0 00-.76 0L9 12 6.354 9.354a.5.5 0 00-.854.353z"
    />
  );

export default SvgVipRoyal;
