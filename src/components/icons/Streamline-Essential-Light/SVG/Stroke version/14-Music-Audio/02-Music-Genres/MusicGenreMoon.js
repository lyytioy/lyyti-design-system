import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMusicGenreMoon = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".music-genre-moon_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle
      className="music-genre-moon_svg__a"
      cx={17.25}
      cy={6.75}
      r={1.25}
    />,
    <circle
      className="music-genre-moon_svg__a"
      cx={22.25}
      cy={5.25}
      r={1.25}
    />,
    <path
      className="music-genre-moon_svg__a"
      d="M18.5 6.75V2.333a1 1 0 01.684-.948l3-.834A1 1 0 0123.5 1.5v3.75"
    />,
    <circle
      className="music-genre-moon_svg__a"
      cx={11.26}
      cy={16.75}
      r={1.25}
    />,
    <circle
      className="music-genre-moon_svg__a"
      cx={16.26}
      cy={15.25}
      r={1.25}
    />,
    <path
      className="music-genre-moon_svg__a"
      d="M12.51 16.75v-4.417a1 1 0 01.683-.948l3-.834a1 1 0 011.317.949v3.75"
    />,
    <path
      className="music-genre-moon_svg__a"
      d="M9 13.944a9.98 9.98 0 01-.476-9.417.5.5 0 00-.58-.7 10 10 0 1010.504 15.754.5.5 0 00-.423-.8 8.42 8.42 0 01-.45.013 10.072 10.072 0 01-2.4-.289"
    />
  );

export default SvgMusicGenreMoon;
