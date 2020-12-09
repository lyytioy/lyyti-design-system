import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgModernMusicDj = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".modern-music-dj_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="modern-music-dj_svg__a"
      d="M23.25 20.25H.75v1.5a1.5 1.5 0 001.5 1.5h19.5a1.5 1.5 0 001.5-1.5zM18.669 14.25H5.331a1.5 1.5 0 00-1.272.705L.75 20.25h22.5l-3.309-5.295a1.5 1.5 0 00-1.272-.705zM11.25 17.25h1.5M7.5 16.5L6.75 18M16.5 16.5l.75 1.5"
    />,
    <circle className="modern-music-dj_svg__a" cx={12} cy={8.25} r={3.75} />,
    <path
      className="modern-music-dj_svg__a"
      d="M18 6.75a6 6 0 00-12 0M18 5.25a3 3 0 010 6zM6 5.25a3 3 0 000 6z"
    />
  );

export default SvgModernMusicDj;
