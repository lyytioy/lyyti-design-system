import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMusicGenreIdea = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".music-genre-idea_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle
      className="music-genre-idea_svg__a"
      cx={13.875}
      cy={10.294}
      r={1.875}
    />,
    <circle
      className="music-genre-idea_svg__a"
      cx={21.375}
      cy={8.044}
      r={1.875}
    />,
    <path
      className="music-genre-idea_svg__a"
      d="M15.75 10.294V3.5a1.5 1.5 0 011.026-1.423l4.5-1.25A1.5 1.5 0 0123.25 2.25v5.794M11.25 2.25V.75M.75 11.25h1.5M3.825 3.076l1.061 1.06M3.825 17.925l1.061-1.061M11.25 21v2.25M12.75 5.439a6.005 6.005 0 00-7.5 5.811A5.964 5.964 0 009 16.776v1.974a2.25 2.25 0 004.5 0v-1.974a6.046 6.046 0 002.722-2.191M9 18h4.5"
    />
  );

export default SvgMusicGenreIdea;
