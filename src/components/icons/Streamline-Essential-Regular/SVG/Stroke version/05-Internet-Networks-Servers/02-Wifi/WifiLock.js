import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgWifiLock = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".wifi-lock_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="wifi-lock_svg__a"
      d="M5.96 11.284a5.25 5.25 0 017.409-.008M3.07 7.822a9.75 9.75 0 0113.165-.029M.75 3.885a14.252 14.252 0 0117.85.007"
    />,
    <rect
      className="wifi-lock_svg__a"
      x={14.25}
      y={15.75}
      width={9}
      height={7.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="wifi-lock_svg__a"
      d="M18.75 11.25a3 3 0 00-3 3v1.5h6v-1.5a3 3 0 00-3-3zM18.75 19.155a.375.375 0 11-.375.375.375.375 0 01.375-.375"
    />
  );

export default SvgWifiLock;
