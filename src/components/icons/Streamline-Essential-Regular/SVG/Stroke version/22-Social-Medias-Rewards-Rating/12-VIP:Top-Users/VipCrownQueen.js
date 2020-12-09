import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVipCrownQueen = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".vip-crown-queen_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="vip-crown-queen_svg__a"
      d="M21 18.75H3A2.25 2.25 0 00.75 21 2.25 2.25 0 003 23.25h18A2.25 2.25 0 0023.25 21 2.25 2.25 0 0021 18.75zM12 8.25V.75M9.75 3h4.5"
    />,
    <path
      className="vip-crown-queen_svg__a"
      d="M2.087 18.951a4.5 4.5 0 117.663-3.2v3M21.913 18.951a4.5 4.5 0 10-7.663-3.2v3"
    />,
    <path
      className="vip-crown-queen_svg__a"
      d="M8.273 12.417A3.828 3.828 0 018.25 12a3.75 3.75 0 017.5 0c0 .129-.007.257-.019.383"
    />
  );

export default SvgVipCrownQueen;
