import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVipCrown = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".vip-crown_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="vip-crown_svg__a"
      d="M21 18H3a2.25 2.25 0 00-2.25 2.25A2.25 2.25 0 003 22.5h18a2.25 2.25 0 002.25-2.25A2.25 2.25 0 0021 18z"
    />,
    <path
      className="vip-crown_svg__a"
      d="M7.73 7.523A2.184 2.184 0 007.5 7.5a6.75 6.75 0 00-6.75 6.75 6.663 6.663 0 001.318 3.957A2.231 2.231 0 013 18h18a2.231 2.231 0 01.932.207 6.663 6.663 0 001.318-3.957A6.75 6.75 0 0016.5 7.5a2.139 2.139 0 00-.229.023"
    />,
    <circle className="vip-crown_svg__a" cx={12} cy={3.75} r={2.25} />,
    <path
      className="vip-crown_svg__a"
      d="M7.5 15a2.25 2.25 0 01-2.25-2.25 6.75 6.75 0 0113.5 0A2.25 2.25 0 0116.5 15"
    />
  );

export default SvgVipCrown;
