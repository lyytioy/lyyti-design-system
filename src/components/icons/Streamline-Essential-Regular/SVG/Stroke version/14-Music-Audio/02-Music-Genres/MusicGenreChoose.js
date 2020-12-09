import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMusicGenreChoose = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".music-genre-choose_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="music-genre-choose_svg__a"
      d="M12.374 12h9.75M12.893 7.509a.511.511 0 01-.471-.3.488.488 0 01.108-.541L16.882 2.4a.518.518 0 01.719 0l4.381 4.237a.486.486 0 01.113.539.51.51 0 01-.469.307zM12.874 16.5a.512.512 0 00-.469.309.49.49 0 00.113.542l4.382 4.255a.518.518 0 00.72 0l4.351-4.289a.491.491 0 00.108-.543.507.507 0 00-.471-.3zM1.918 18.362a1.5 1.5 0 111.449 1.888 1.5 1.5 0 11-1.445 1.9M1.867.75h.75a.75.75 0 01.75.75v5.25M1.867 6.75h3M3.367 9.75a.375.375 0 11-.375.375.374.374 0 01.375-.375M3.367 13.594a.375.375 0 11-.375.375.374.374 0 01.375-.375"
    />
  );

export default SvgMusicGenreChoose;
