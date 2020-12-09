import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSecurityRemoteUnlock = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".security-remote-unlock_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="security-remote-unlock_svg__a"
      x={3.75}
      y={9.75}
      width={16.5}
      height={13.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="security-remote-unlock_svg__a"
      d="M6.75 6a5.25 5.25 0 0110.5 0v3.75M11.858 19.5a.375.375 0 11-.375.375.375.375 0 01.375-.375M8.573 16.73a6.006 6.006 0 016.57 0M16.966 14.36a8.982 8.982 0 00-10.216 0"
    />
  );

export default SvgSecurityRemoteUnlock;
