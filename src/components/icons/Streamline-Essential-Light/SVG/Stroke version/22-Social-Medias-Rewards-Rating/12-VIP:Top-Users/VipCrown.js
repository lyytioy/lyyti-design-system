import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVipCrown = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".vip-crown_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="vip-crown_svg__a"
      d="M21 23H3a1.5 1.5 0 010-3h18a1.5 1.5 0 010 3zM17.646 17.031a6 6 0 10-11.307-.039"
    />,
    <circle className="vip-crown_svg__a" cx={12} cy={4} r={3} />,
    <path
      className="vip-crown_svg__a"
      d="M9 4h6M12 7v2M9.248 9.666A6 6 0 003.185 20h17.63A6 6 0 0014.75 9.667"
    />
  );

export default SvgVipCrown;
