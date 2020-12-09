import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgArchiveLocker = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".archive-locker_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="archive-locker_svg__a"
      x={0.751}
      y={0.75}
      width={22.499}
      height={22.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="archive-locker_svg__a"
      d="M.751 8.25h22.498M.751 15.75h22.498M15 18.75a.75.75 0 01-.75.75h-4.5a.75.75 0 01-.75-.75M15 11.25a.75.75 0 01-.75.75h-4.5a.75.75 0 01-.75-.75M15 3.75a.75.75 0 01-.75.75h-4.5A.75.75 0 019 3.75"
    />
  );

export default SvgArchiveLocker;
