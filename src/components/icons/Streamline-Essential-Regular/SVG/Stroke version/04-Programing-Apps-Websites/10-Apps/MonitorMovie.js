import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMonitorMovie = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".monitor-movie_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="monitor-movie_svg__a"
      d="M15 23.254H9l.75-4.5h4.5l.75 4.5zM6.75 23.254h10.5"
    />,
    <rect
      className="monitor-movie_svg__a"
      x={0.75}
      y={0.754}
      width={22.5}
      height={18}
      rx={3}
      ry={3}
    />,
    <path
      className="monitor-movie_svg__a"
      d="M8.25 5.254v9M15.75 5.254v9M8.25 6.754h7.5M8.25 12.754h7.5M5.25 5.629A.375.375 0 114.875 6a.374.374 0 01.375-.375M5.25 9.379a.375.375 0 11-.375.375.374.374 0 01.375-.375M5.25 13.129a.375.375 0 11-.375.375.374.374 0 01.375-.375M18.75 5.629a.375.375 0 10.375.371.374.374 0 00-.375-.375M18.75 9.379a.375.375 0 10.375.375.374.374 0 00-.375-.375M18.75 13.129a.375.375 0 10.375.375.374.374 0 00-.375-.375"
    />
  );

export default SvgMonitorMovie;
