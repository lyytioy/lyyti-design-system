import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmartWatchSquareApp = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smart-watch-square-app_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="smart-watch-square-app_svg__a"
      x={4.5}
      y={5.25}
      width={15}
      height={13.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="smart-watch-square-app_svg__a"
      d="M16.5 5.25h-9L8.041 2A1.5 1.5 0 019.521.75h4.958A1.5 1.5 0 0115.959 2zM7.5 18.75h9L15.959 22a1.5 1.5 0 01-1.48 1.253H9.521A1.5 1.5 0 018.041 22zM12 10.875a.75.75 0 11-.75.75.75.75 0 01.75-.75M10.125 8.625A.375.375 0 119.75 9a.375.375 0 01.375-.375M8.625 11.625A.375.375 0 118.25 12a.375.375 0 01.375-.375M15.375 11.625A.375.375 0 1115 12a.375.375 0 01.375-.375M13.875 8.625A.375.375 0 1113.5 9a.375.375 0 01.375-.375M10.125 14.625A.375.375 0 119.75 15a.375.375 0 01.375-.375M13.875 14.625A.375.375 0 1113.5 15a.375.375 0 01.375-.375"
    />
  );

export default SvgSmartWatchSquareApp;
