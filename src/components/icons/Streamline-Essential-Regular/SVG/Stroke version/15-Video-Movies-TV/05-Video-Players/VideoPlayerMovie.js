import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVideoPlayerMovie = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".video-player-movie_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="video-player-movie_svg__a"
      x={0.75}
      y={0.75}
      width={22.5}
      height={22.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="video-player-movie_svg__a"
      d="M10.238 15.66A.856.856 0 019 14.894V9.106a.856.856 0 011.238-.766l5.789 2.895a.855.855 0 010 1.53zM.75 4.5h22.5M.75 19.5h22.5"
    />
  );

export default SvgVideoPlayerMovie;
