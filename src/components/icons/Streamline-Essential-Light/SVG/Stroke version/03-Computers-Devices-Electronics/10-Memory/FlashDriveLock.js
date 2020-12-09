import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFlashDriveLock = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".flash-drive-lock_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="flash-drive-lock_svg__a"
      d="M10 23.5H4.5a2 2 0 01-2-2v-12a1 1 0 011-1h13a1 1 0 011 1M4.5 1.5a1 1 0 011-1h9a1 1 0 011 1v7h-11z"
    />,
    <path
      className="flash-drive-lock_svg__a"
      d="M6.5 2.5h2v2h-2zM11.5 2.5h2v2h-2z"
    />,
    <rect
      className="flash-drive-lock_svg__a"
      x={12.5}
      y={15.501}
      width={9}
      height={7.999}
      rx={1}
      ry={1}
    />,
    <circle className="flash-drive-lock_svg__a" cx={17} cy={19.563} r={1.25} />,
    <path
      className="flash-drive-lock_svg__a"
      d="M19.5 14a2.5 2.5 0 00-5 0v1.5h5z"
    />
  );

export default SvgFlashDriveLock;
