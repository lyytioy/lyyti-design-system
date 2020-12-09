import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMusicGenreTeam = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".music-genre-team_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle
      className="music-genre-team_svg__a"
      cx={3.375}
      cy={4.875}
      r={2.625}
    />,
    <path
      className="music-genre-team_svg__a"
      d="M7.514 10.983A4.5 4.5 0 00.75 9.1"
    />,
    <circle
      className="music-genre-team_svg__a"
      cx={20.625}
      cy={4.875}
      r={2.625}
    />,
    <path
      className="music-genre-team_svg__a"
      d="M16.486 10.983A4.5 4.5 0 0123.25 9.1"
    />,
    <circle className="music-genre-team_svg__a" cx={12} cy={4.125} r={3.375} />,
    <path
      className="music-genre-team_svg__a"
      d="M16.715 11.249a6.067 6.067 0 00-9.43 0"
    />,
    <circle
      className="music-genre-team_svg__a"
      cx={7.125}
      cy={21.375}
      r={1.875}
    />,
    <circle
      className="music-genre-team_svg__a"
      cx={14.625}
      cy={19.875}
      r={1.875}
    />,
    <path
      className="music-genre-team_svg__a"
      d="M9 21.375V16.25a1.5 1.5 0 011.026-1.423l4.5-1.25A1.5 1.5 0 0116.5 15v4.875"
    />
  );

export default SvgMusicGenreTeam;
