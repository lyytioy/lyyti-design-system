import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgWifiLock = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".wifi-lock_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="wifi-lock_svg__a"
      d="M3.031 7.6a8.946 8.946 0 0112.654 0M18.215 4.169a12.526 12.526 0 00-17.715 0M5.561 11.02a5.369 5.369 0 017.593 0M15.685 7.6a8.946 8.946 0 00-12.654 0M13.154 11.02a5.369 5.369 0 00-7.593 0M11.147 15.71a1.79 1.79 0 11-1.789-1.789 1.79 1.79 0 011.789 1.789z"
    />,
    <rect
      className="wifi-lock_svg__a"
      x={14.373}
      y={15.468}
      width={9}
      height={7.999}
      rx={1}
      ry={1}
    />,
    <circle className="wifi-lock_svg__a" cx={18.873} cy={19.53} r={1.25} />,
    <path
      className="wifi-lock_svg__a"
      d="M21.373 13.967a2.5 2.5 0 00-5 0v1.5h5z"
    />
  );

export default SvgWifiLock;
