import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMusicGenreMoonNight = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".music-genre-moon-night_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle
      className="music-genre-moon-night_svg__a"
      cx={17.253}
      cy={6.861}
      r={1.25}
    />,
    <circle
      className="music-genre-moon-night_svg__a"
      cx={22.253}
      cy={5.361}
      r={1.25}
    />,
    <path
      className="music-genre-moon-night_svg__a"
      d="M18.5 6.861V2.332a1 1 0 01.683-.949l3-.833a1 1 0 011.317.95v3.861"
    />,
    <circle
      className="music-genre-moon-night_svg__a"
      cx={14.253}
      cy={14.749}
      r={1.25}
    />,
    <path
      className="music-genre-moon-night_svg__a"
      d="M15.503 14.749v-4.25M8.582 13.622a10.5 10.5 0 012.957-10.263.5.5 0 00-.339-.859 10.5 10.5 0 105.063 19.588.5.5 0 00-.126-.917 10.5 10.5 0 01-7.555-7.549z"
    />
  );

export default SvgMusicGenreMoonNight;
