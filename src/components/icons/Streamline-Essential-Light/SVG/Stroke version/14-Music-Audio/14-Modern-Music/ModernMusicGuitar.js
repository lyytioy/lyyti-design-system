import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgModernMusicGuitar = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".modern-music-guitar_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="modern-music-guitar_svg__a"
      d="M15.455 16.752a.25.25 0 11-.353 0 .25.25 0 01.353 0M11.707 18.5l2 2"
    />,
    <path
      className="modern-music-guitar_svg__a"
      d="M23.354 10.354a.5.5 0 000-.707l-.793-.793a.5.5 0 00-.707 0l-5.084 5.083a2.571 2.571 0 00-3.995 1.851c-4.082-.876-5.327 3.618-2.65 6.294s7.166 1.411 6.294-2.65a2.569 2.569 0 001.851-3.995zM11.5.5h4a1 1 0 011 1v8a1 1 0 01-1 1h-14a1 1 0 01-1-1v-8a1 1 0 011-1h5M8.5 10.5v2M8.5 14.5h-8v-2h11M2.5 14.5l-2 4"
    />,
    <circle
      className="modern-music-guitar_svg__a"
      cx={7.25}
      cy={6.75}
      r={1.25}
    />,
    <path className="modern-music-guitar_svg__a" d="M8.5 6.75V2l2 1.5" />
  );

export default SvgModernMusicGuitar;
