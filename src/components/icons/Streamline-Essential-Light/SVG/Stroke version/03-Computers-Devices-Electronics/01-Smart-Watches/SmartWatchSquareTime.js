import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmartWatchSquareTime = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smart-watch-square-time_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="smart-watch-square-time_svg__a"
      x={6.5}
      y={14.5}
      width={11}
      height={3}
      rx={0.5}
      ry={0.5}
    />,
    <rect
      className="smart-watch-square-time_svg__a"
      x={3.5}
      y={3.5}
      width={17}
      height={17}
      rx={2}
      ry={2}
    />,
    <path
      className="smart-watch-square-time_svg__a"
      d="M16.5 3.5h-9l1-3h7l1 3zM7.5 20.5h9l-1 3h-7l-1-3z"
    />,
    <circle className="smart-watch-square-time_svg__a" cx={6.5} cy={8} r={1} />,
    <path
      className="smart-watch-square-time_svg__a"
      d="M7.5 8v1.5A1.5 1.5 0 016 11M14.5 11V7a2 2 0 00-2 2v.5h2M18.5 10a1 1 0 01-2 0V8a1 1 0 012 0zM10.25 7.25a.25.25 0 11-.25.25.25.25 0 01.25-.25M10.25 10.5a.25.25 0 11-.25.25.25.25 0 01.25-.25"
    />
  );

export default SvgSmartWatchSquareTime;
