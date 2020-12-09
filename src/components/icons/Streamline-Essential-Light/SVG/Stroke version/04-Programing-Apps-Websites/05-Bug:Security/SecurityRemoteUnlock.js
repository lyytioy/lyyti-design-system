import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSecurityRemoteUnlock = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".security-remote-unlock_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="security-remote-unlock_svg__a"
      d="M6.5 6a5.5 5.5 0 0111 0v3.5"
    />,
    <rect
      className="security-remote-unlock_svg__a"
      x={3.5}
      y={9.5}
      width={17}
      height={14}
      rx={1}
      ry={1}
    />,
    <path
      className="security-remote-unlock_svg__a"
      d="M15.409 16.872a4.918 4.918 0 00-6.818 0M17.454 14.7a7.868 7.868 0 00-10.909 0"
    />,
    <circle className="security-remote-unlock_svg__a" cx={12} cy={19.5} r={1} />
  );

export default SvgSecurityRemoteUnlock;
