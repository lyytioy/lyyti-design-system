import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFlashDriveLock = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".flash-drive-lock_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="flash-drive-lock_svg__a"
      x={14.25}
      y={15.75}
      width={9}
      height={7.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="flash-drive-lock_svg__a"
      d="M15.75 15.75V13.5a3 3 0 013-3 3 3 0 013 3v2.25M11.25 8.25h-9V1.5A.75.75 0 013 .75h7.5a.75.75 0 01.75.75zM5.25 3.75v1.5M8.25 3.75v1.5M11.039 17.782a4.484 4.484 0 01-2.789.968h-3a4.5 4.5 0 01-4.5-4.5v-4.5a1.5 1.5 0 011.5-1.5h9a1.5 1.5 0 011.5 1.5v3M6.75 18.75v4.5M18.75 19.125a.375.375 0 10.375.375.375.375 0 00-.375-.375"
    />
  );

export default SvgFlashDriveLock;
