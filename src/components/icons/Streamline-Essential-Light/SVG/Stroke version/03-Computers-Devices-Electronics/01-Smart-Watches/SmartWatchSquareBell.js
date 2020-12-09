import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmartWatchSquareBell = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smart-watch-square-bell_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="smart-watch-square-bell_svg__a"
      x={3.5}
      y={3.5}
      width={17}
      height={17}
      rx={2}
      ry={2}
    />,
    <path
      className="smart-watch-square-bell_svg__a"
      d="M16.5 3.5h-9l1-3h7l1 3zM7.5 20.5h9l-1 3h-7l-1-3zM15.5 13.086V11a3.5 3.5 0 00-3.688-3.495A3.633 3.633 0 008.5 11.2v1.888a3.415 3.415 0 01-1 2.414h9a3.415 3.415 0 01-1-2.416zM11.5 17.5h1"
    />
  );

export default SvgSmartWatchSquareBell;
