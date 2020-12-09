import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSecurityLock = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".security-lock_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="security-lock_svg__a"
      x={3.75}
      y={11.25}
      width={16.5}
      height={12}
      rx={2.25}
      ry={2.25}
    />,
    <path
      className="security-lock_svg__a"
      d="M6.75 11.25V6a5.25 5.25 0 0110.5 0v5.25M3.75 17.25h16.5M7.5 13.875a.375.375 0 11-.375.375.375.375 0 01.375-.375M7.5 19.875a.375.375 0 11-.375.375.375.375 0 01.375-.375"
    />
  );

export default SvgSecurityLock;
