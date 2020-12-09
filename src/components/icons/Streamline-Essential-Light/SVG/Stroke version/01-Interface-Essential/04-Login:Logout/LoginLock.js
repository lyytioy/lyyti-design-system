import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLoginLock = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".login-lock_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="login-lock_svg__a"
      x={13.5}
      y={10.5}
      width={9}
      height={7}
      rx={1}
      ry={1}
    />,
    <path
      className="login-lock_svg__a"
      d="M18 15.5V13M15 10.5v-1a3 3 0 016 0v1M18 12.75a.25.25 0 01.25.25.25.25 0 01-.25.25.25.25 0 01-.25-.25.25.25 0 01.25-.25M10.5 2.5H18a.5.5 0 01.5.5v1.5M18.5 19.521V21a.5.5 0 01-.5.5h-7.5M1.5 21.223a.5.5 0 00.392.488l8 1.777A.5.5 0 0010.5 23V1a.5.5 0 00-.608-.488l-8 1.778a.5.5 0 00-.392.488z"
    />,
    <circle className="login-lock_svg__a" cx={7} cy={12} r={1.5} />
  );

export default SvgLoginLock;
