import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgServerLock = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".server-lock_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="server-lock_svg__a"
      d="M5.251 4.875a.375.375 0 10.375.375.375.375 0 00-.375-.375M5.251 13.875a.375.375 0 10.375.375.375.375 0 00-.375-.375"
    />,
    <path
      className="server-lock_svg__a"
      d="M15 9.75H5.251a4.5 4.5 0 010-9h12c3.446 0 5.987 3.874 3.507 7.5M11.251 18.75h-6a4.5 4.5 0 010-9H15M10.501 5.25h6.75M10.501 14.25h1.5"
    />,
    <rect
      className="server-lock_svg__a"
      x={14.251}
      y={15.75}
      width={9}
      height={7.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="server-lock_svg__a"
      d="M18.751 11.25a3 3 0 00-3 3v1.5h6v-1.5a3 3 0 00-3-3zM18.751 19.154a.375.375 0 10.375.375.375.375 0 00-.375-.375"
    />
  );

export default SvgServerLock;
