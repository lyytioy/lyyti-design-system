import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMusicGenreTeam = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".music-genre-team_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="music-genre-team_svg__a" cx={19} cy={4.75} r={2.25} />,
    <path
      className="music-genre-team_svg__a"
      d="M23.5 11.5a4.641 4.641 0 00-6.667-2.955"
    />,
    <circle className="music-genre-team_svg__a" cx={5} cy={4.75} r={2.25} />,
    <path
      className="music-genre-team_svg__a"
      d="M.5 11.5a4.641 4.641 0 016.667-2.955"
    />,
    <circle className="music-genre-team_svg__a" cx={14} cy={21} r={1.5} />,
    <circle className="music-genre-team_svg__a" cx={7} cy={22} r={1.5} />,
    <path
      className="music-genre-team_svg__a"
      d="M8.5 22v-5.746a1 1 0 01.725-.961l5-1.429a1 1 0 011.275.962V21M17.5 14a5.5 5.5 0 10-11 0M9.153 2.11a5.4 5.4 0 003.875 1.64 5.382 5.382 0 002.123-.434"
    />,
    <circle
      className="music-genre-team_svg__a"
      cx={11.944}
      cy={3.75}
      r={3.25}
    />
  );

export default SvgMusicGenreTeam;
