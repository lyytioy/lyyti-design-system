import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMonitorMovie = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".monitor-movie_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="monitor-movie_svg__a"
      d="M5 22.004h14M11.5 20.004v2M.5 16.004h23M8.499 4.504v9M4.499 4.504v9M20.499 4.504v9M16.499 4.504v9M6.499 4.504v1.5M6.499 8.004v1.5M6.499 11.504v1.5M18.499 4.504v1.5M18.499 8.004v1.5M18.499 11.504v1.5M8.499 6.004h8M8.499 12.004h8"
    />,
    <rect
      className="monitor-movie_svg__a"
      x={0.5}
      y={2.004}
      width={23}
      height={18}
      rx={1.5}
      ry={1.5}
    />
  );

export default SvgMonitorMovie;
