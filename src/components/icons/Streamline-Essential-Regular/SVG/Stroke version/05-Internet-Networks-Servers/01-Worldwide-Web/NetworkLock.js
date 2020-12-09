import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNetworkLock = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".network-lock_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="network-lock_svg__a"
      x={14.25}
      y={15.75}
      width={9}
      height={7.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="network-lock_svg__a"
      d="M18.75 11.25a3 3 0 00-3 3v1.5h6v-1.5a3 3 0 00-3-3zM18.75 19.155a.375.375 0 11-.375.375.375.375 0 01.375-.375M11.236 23.225a11.251 11.251 0 1111.913-12.739"
    />,
    <path
      className="network-lock_svg__a"
      d="M9.289 22.921C7.768 20.689 6.75 16.633 6.75 12S7.768 3.312 9.289 1.079M.774 11.25H13.5M2.999 5.25H21M2.048 17.25h9.202M14.711 1.079a17.046 17.046 0 012.311 7.192"
    />
  );

export default SvgNetworkLock;
