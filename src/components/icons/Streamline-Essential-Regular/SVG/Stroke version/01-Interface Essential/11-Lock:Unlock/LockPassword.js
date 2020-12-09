import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLockPassword = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".lock-password_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="lock-password_svg__a"
      x={3.75}
      y={9.75}
      width={16.5}
      height={13.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="lock-password_svg__a"
      d="M6.75 9.75V6a5.25 5.25 0 0110.5 0v3.75M8.625 14.25a.375.375 0 10.375.375.375.375 0 00-.375-.375M12 14.25a.375.375 0 10.375.375.375.375 0 00-.375-.375M15.375 14.25a.375.375 0 10.375.375.375.375 0 00-.375-.375M8.625 18a.375.375 0 10.375.375.375.375 0 00-.375-.375M12 18a.375.375 0 10.375.375A.375.375 0 0012 18M15.375 18a.375.375 0 10.375.375.375.375 0 00-.375-.375"
    />
  );

export default SvgLockPassword;
