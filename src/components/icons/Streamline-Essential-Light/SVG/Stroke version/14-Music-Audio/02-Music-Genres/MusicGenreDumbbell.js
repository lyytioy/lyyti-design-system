import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMusicGenreDumbbell = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".music-genre-dumbbell_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="music-genre-dumbbell_svg__a"
      d="M13.667 8.111l-5.655 5.657M15.788 10.232l-5.655 5.657M8.794 22.667a1.488 1.488 0 01-.782-.414l-6.365-6.364a1.5 1.5 0 012.121-2.121L9.5 19.5"
    />,
    <path
      className="music-genre-dumbbell_svg__a"
      d="M9.5 19.5l-7.146-7.146a1.5 1.5 0 012.122-2.122l7.167 7.168M16.136 10.58l-6-6a1.5 1.5 0 012.122-2.122L19.5 9.7M.939 19.425A1.5 1.5 0 013.061 17.3L6.6 20.839a1.5 1.5 0 01-2.122 2.122z"
    />,
    <path
      className="music-genre-dumbbell_svg__a"
      d="M19.5 9.7l-5.831-5.832a1.5 1.5 0 112.121-2.121l6.362 6.364a1.492 1.492 0 01.416.792"
    />,
    <path
      className="music-genre-dumbbell_svg__a"
      d="M17.2 3.161a1.5 1.5 0 012.12-2.121l3.54 3.536A1.5 1.5 0 0120.738 6.7z"
    />,
    <circle
      className="music-genre-dumbbell_svg__a"
      cx={13.5}
      cy={21.399}
      r={2}
    />,
    <circle
      className="music-genre-dumbbell_svg__a"
      cx={21.5}
      cy={19.399}
      r={2}
    />,
    <path
      className="music-genre-dumbbell_svg__a"
      d="M23.5 19.4v-6.8a1 1 0 00-1.184-.983l-6 1.125a1 1 0 00-.816.983V21.4"
    />
  );

export default SvgMusicGenreDumbbell;
