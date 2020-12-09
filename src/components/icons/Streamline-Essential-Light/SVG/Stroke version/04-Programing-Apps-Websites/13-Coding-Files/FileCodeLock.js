import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFileCodeLock = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".file-code-lock_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="file-code-lock_svg__a"
      x={14.531}
      y={15.504}
      width={9}
      height={7.999}
      rx={1}
      ry={1}
    />,
    <circle
      className="file-code-lock_svg__a"
      cx={19.031}
      cy={19.567}
      r={1.25}
    />,
    <path
      className="file-code-lock_svg__a"
      d="M21.531 14a2.5 2.5 0 10-5 0v1.5h5z"
    />,
    <path
      className="file-code-lock_svg__a"
      d="M10.531 23.5h-9a1 1 0 01-1-1v-21a1 1 0 011-1h13.293a1 1 0 01.707.3l3.707 3.7a1 1 0 01.293.707V8.5M3.531 5.504v4M12.531 5.504v4M9.531 12.504v4M15.531 5.504v4"
    />,
    <path
      className="file-code-lock_svg__a"
      d="M8.031 5.5a1.5 1.5 0 011.5 1.5v1a1.5 1.5 0 11-3 0V7a1.5 1.5 0 011.5-1.5zM5.031 12.5a1.5 1.5 0 011.5 1.5v1a1.5 1.5 0 01-3 0v-1a1.5 1.5 0 011.5-1.5z"
    />
  );

export default SvgFileCodeLock;
