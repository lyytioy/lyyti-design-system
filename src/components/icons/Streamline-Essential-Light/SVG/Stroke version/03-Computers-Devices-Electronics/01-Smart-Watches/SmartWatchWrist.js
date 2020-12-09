import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmartWatchWrist = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smart-watch-wrist_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="smart-watch-wrist_svg__a"
      d="M7.7 8a1.746 1.746 0 00-2.4 0M10.1 5.694a5.24 5.24 0 00-7.2 0M10.1 5.694a5.24 5.24 0 00-7.2 0M12.5 3.388a8.732 8.732 0 00-12 0M12.5 3.388a8.732 8.732 0 00-12 0"
    />,
    <rect
      className="smart-watch-wrist_svg__a"
      x={3.5}
      y={13}
      width={6}
      height={6}
      rx={1}
      ry={1}
    />,
    <path
      className="smart-watch-wrist_svg__a"
      d="M8.5 19v2h-4v-2M4.5 13v-2h4v2M4.5 12h-4M8.5 20h2.282l1 1.2a5 5 0 003.84 1.8h2.159a2 2 0 002-2H21.5a2 2 0 001.983-2.262l-.818-6.183A3 3 0 0019.7 10h-4.09a5 5 0 00-2.481.659L10.782 12H8.5M19.782 21H16.5M.5 20h4"
    />
  );

export default SvgSmartWatchWrist;
