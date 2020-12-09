import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLock = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".lock_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="lock_svg__a"
      x={6.5}
      y={10.5}
      width={11}
      height={9}
      rx={1}
      ry={1}
    />,
    <path
      className="lock_svg__a"
      d="M12 16.5V14M12 13.75a.25.25 0 11-.25.25.25.25 0 01.25-.25M8.5 23.5h-7a1 1 0 01-1-1v-7M8.5.5h-7a1 1 0 00-1 1v7M15.5 23.5h7a1 1 0 001-1v-7M15.5.5h7a1 1 0 011 1v7M15.5 8a3.5 3.5 0 00-7 0v2.5h7z"
    />
  );

export default SvgLock;
