import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmartWatchSquareRinging = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smart-watch-square-ringing_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="smart-watch-square-ringing_svg__a"
      x={3.75}
      y={3.75}
      width={16.5}
      height={16.5}
      rx={3}
      ry={3}
    />,
    <path
      className="smart-watch-square-ringing_svg__a"
      d="M17.25 3.75H6.75v-1.5a1.5 1.5 0 011.5-1.5h7.5a1.5 1.5 0 011.5 1.5zM15.75 23.25h-7.5a1.5 1.5 0 01-1.5-1.5v-1.5h10.5v1.5a1.5 1.5 0 01-1.5 1.5zM9.838 12.422V15.2A1.235 1.235 0 018.6 16.432h-.615A1.235 1.235 0 016.75 15.2v-.536a1.235 1.235 0 01.6-1.059A8.353 8.353 0 0112 12.109a8.285 8.285 0 014.65 1.491 1.235 1.235 0 01.6 1.059v.541a1.235 1.235 0 01-1.235 1.235H15.4a1.235 1.235 0 01-1.238-1.235v-2.771M12 9V6.75M15 9.75l.75-1.5M9 9.75l-.75-1.5"
    />
  );

export default SvgSmartWatchSquareRinging;
