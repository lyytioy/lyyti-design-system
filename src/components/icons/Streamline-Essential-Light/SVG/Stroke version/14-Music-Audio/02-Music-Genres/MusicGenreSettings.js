import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMusicGenreSettings = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".music-genre-settings_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle
      className="music-genre-settings_svg__a"
      cx={13.5}
      cy={21.5}
      r={2}
    />,
    <circle
      className="music-genre-settings_svg__a"
      cx={21.5}
      cy={19.5}
      r={2}
    />,
    <path
      className="music-genre-settings_svg__a"
      d="M23.5 19.5v-6.795a1 1 0 00-1.184-.983l-6 1.125a1 1 0 00-.816.983v7.67M8.969 21.375a1.3 1.3 0 00-1.938 0l-.627.694a1.306 1.306 0 01-2.274-.942l.048-.934a1.307 1.307 0 00-1.371-1.371l-.934.048a1.306 1.306 0 01-.942-2.27l.694-.627a1.3 1.3 0 000-1.938L.931 13.4a1.306 1.306 0 01.942-2.274l.934.048a1.307 1.307 0 001.371-1.367l-.048-.934a1.306 1.306 0 012.27-.942l.627.694a1.3 1.3 0 001.938 0l.635-.694a1.306 1.306 0 012.274.942l-.048.934a1.307 1.307 0 001.371 1.371"
    />,
    <circle className="music-genre-settings_svg__a" cx={8} cy={15} r={3.5} />,
    <circle className="music-genre-settings_svg__a" cx={18} cy={5} r={1} />,
    <path
      className="music-genre-settings_svg__a"
      d="M18.849 1.132l.295.968a.663.663 0 00.783.454l.981-.228a.893.893 0 01.85 1.479l-.687.741a.669.669 0 000 .908l.687.741a.893.893 0 01-.85 1.479l-.981-.228a.663.663 0 00-.783.454l-.295.968a.886.886 0 01-1.7 0l-.293-.968a.663.663 0 00-.783-.454l-.981.228a.893.893 0 01-.85-1.479l.687-.741a.669.669 0 000-.908l-.687-.741a.893.893 0 01.85-1.479l.981.228a.663.663 0 00.783-.454l.295-.968a.886.886 0 011.698 0z"
    />
  );

export default SvgMusicGenreSettings;
