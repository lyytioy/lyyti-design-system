import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmartWatchSquareSettings = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smart-watch-square-settings_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="smart-watch-square-settings_svg__a"
      x={3.75}
      y={3.75}
      width={16.5}
      height={16.5}
      rx={3}
      ry={3}
    />,
    <path
      className="smart-watch-square-settings_svg__a"
      d="M17.25 3.75H6.75v-1.5a1.5 1.5 0 011.5-1.5h7.5a1.5 1.5 0 011.5 1.5zM15.75 23.25h-7.5a1.5 1.5 0 01-1.5-1.5v-1.5h10.5v1.5a1.5 1.5 0 01-1.5 1.5z"
    />,
    <circle
      className="smart-watch-square-settings_svg__a"
      cx={12}
      cy={12}
      r={2.7}
    />,
    <path
      className="smart-watch-square-settings_svg__a"
      d="M12 9.3V7.5M12 16.5v-1.8M14.7 12h1.8M7.5 12h1.8M9.236 15.182l1.075-1.075M9.236 8.818l1.075 1.075M14.764 15.182l-1.075-1.075M14.764 8.818l-1.075 1.075"
    />
  );

export default SvgSmartWatchSquareSettings;
