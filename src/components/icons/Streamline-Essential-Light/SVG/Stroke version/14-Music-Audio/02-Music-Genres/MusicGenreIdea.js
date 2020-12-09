import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMusicGenreIdea = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".music-genre-idea_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="music-genre-idea_svg__a" cx={21.5} cy={9.674} r={1.5} />,
    <circle
      className="music-genre-idea_svg__a"
      cx={14.5}
      cy={10.674}
      r={1.5}
    />,
    <path
      className="music-genre-idea_svg__a"
      d="M16 10.674V4.929a1 1 0 01.725-.962l5-1.429A1 1 0 0123 3.5v6.174"
    />,
    <path
      className="music-genre-idea_svg__a"
      d="M13.505 4.792A6.985 6.985 0 008.989 18h5.022a7 7 0 004.307-5M11.5 22v1M11.5 1v1.5"
    />,
    <path
      className="music-genre-idea_svg__a"
      d="M13.5 20a2 2 0 01-4 0v-2h4zM5.136 5.136L4.075 4.075M2.5 11H1M9.5 20h4"
    />
  );

export default SvgMusicGenreIdea;
