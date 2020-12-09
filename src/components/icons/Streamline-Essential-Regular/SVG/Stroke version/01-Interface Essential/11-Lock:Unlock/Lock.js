import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLock = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".lock_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="lock_svg__a"
      d="M12 13.875a.375.375 0 10.375.375.374.374 0 00-.375-.375M15.75 9.75V7.5A3.76 3.76 0 0012 3.75 3.761 3.761 0 008.25 7.5v2.25M.75 3.75v-1.5a1.5 1.5 0 011.5-1.5h1.5M23.25 3.75v-1.5a1.5 1.5 0 00-1.5-1.5h-1.5M.75 20.25v1.5a1.5 1.5 0 001.5 1.5h1.5M23.25 20.25v1.5a1.5 1.5 0 01-1.5 1.5h-1.5"
    />,
    <rect
      className="lock_svg__a"
      x={6.75}
      y={9.75}
      width={10.5}
      height={9}
      rx={1.5}
      ry={1.5}
    />
  );

export default SvgLock;
