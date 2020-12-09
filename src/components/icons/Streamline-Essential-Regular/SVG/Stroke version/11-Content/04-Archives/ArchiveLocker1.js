import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgArchiveLocker1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".archive-locker-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="archive-locker-1_svg__a"
      x={0.75}
      y={0.75}
      width={22.5}
      height={21}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="archive-locker-1_svg__a"
      d="M10.5 4.5h3M10.5 12.75h3M3.75 21.75v1.5M20.25 21.75v1.5M.75 8.25h22.5"
    />
  );

export default SvgArchiveLocker1;
