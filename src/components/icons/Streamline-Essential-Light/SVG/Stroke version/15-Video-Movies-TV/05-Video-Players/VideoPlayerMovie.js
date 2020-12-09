import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVideoPlayerMovie = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".video-player-movie_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="video-player-movie_svg__a"
      x={0.5}
      y={2.5}
      width={23}
      height={19}
      rx={2}
      ry={2}
    />,
    <path
      className="video-player-movie_svg__a"
      d="M14.53 12.671a.714.714 0 000-1.342L9.97 9.671A.35.35 0 009.5 10v4a.35.35 0 00.47.329zM.5 6.5h23M.5 17.5h23M3.75 4.25a.25.25 0 11-.25.25.25.25 0 01.25-.25M7.875 4.25a.25.25 0 11-.25.25.25.25 0 01.25-.25M20.25 4.25a.25.25 0 10.25.25.25.25 0 00-.25-.25M16.125 4.25a.25.25 0 10.25.25.25.25 0 00-.25-.25M12 4.25a.25.25 0 11-.25.25.25.25 0 01.25-.25M3.75 19.25a.25.25 0 10.25.25.25.25 0 00-.25-.25M7.875 19.25a.25.25 0 10.25.25.25.25 0 00-.25-.25M20.25 19.25a.25.25 0 11-.25.25.25.25 0 01.25-.25M16.125 19.25a.25.25 0 11-.25.25.25.25 0 01.25-.25M12 19.25a.25.25 0 10.25.25.25.25 0 00-.25-.25"
    />
  );

export default SvgVideoPlayerMovie;
