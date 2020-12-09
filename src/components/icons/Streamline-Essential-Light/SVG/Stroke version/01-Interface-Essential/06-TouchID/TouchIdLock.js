import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTouchIdLock = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".touch-id-lock_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="touch-id-lock_svg__a"
      d="M18.5 9.5a8.967 8.967 0 00-2.293-6M.5 11.5v3A9 9 0 006 22.794M14 1.706A9 9 0 00.514 9"
    />,
    <path
      className="touch-id-lock_svg__a"
      d="M7 4.044A6 6 0 0115.5 9.5v1.426M5.028 5.5a5.977 5.977 0 00-1.528 4v5a6 6 0 009 5.2"
    />,
    <path
      className="touch-id-lock_svg__a"
      d="M6.5 14.5a3 3 0 006 0v-5a3 3 0 00-6 0v3M9.5 9.5v3M9.5 14.5v1M9.5 23.5a9.017 9.017 0 002.523-.358"
    />,
    <rect
      className="touch-id-lock_svg__a"
      x={14.5}
      y={15.5}
      width={9}
      height={7.999}
      rx={1}
      ry={1}
    />,
    <circle className="touch-id-lock_svg__a" cx={19} cy={19.563} r={1.25} />,
    <path
      className="touch-id-lock_svg__a"
      d="M21.5 14a2.5 2.5 0 00-5 0v1.5h5z"
    />
  );

export default SvgTouchIdLock;
