import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVipCrownKing = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".vip-crown-king_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="vip-crown-king_svg__a"
      d="M21 18.75H3A2.25 2.25 0 00.75 21 2.25 2.25 0 003 23.25h18A2.25 2.25 0 0023.25 21 2.25 2.25 0 0021 18.75zM6.75 12.75a5.25 5.25 0 0110.5 0M12 7.5V.75M9.75 3h4.5"
    />,
    <path
      className="vip-crown-king_svg__a"
      d="M16.354 9.816a6.145 6.145 0 01.9-.066 6 6 0 014.975 9.355M7.646 9.816a6.145 6.145 0 00-.9-.066 6 6 0 00-4.975 9.355"
    />
  );

export default SvgVipCrownKing;
