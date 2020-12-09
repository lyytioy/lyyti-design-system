import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMusicGenreBrain = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".music-genre-brain_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="music-genre-brain_svg__a"
      d="M8.306 15.065a2.826 2.826 0 00-2.826-2.826c-.046 0-.088.011-.133.013"
    />,
    <path
      className="music-genre-brain_svg__a"
      d="M8.012 3.879a1.736 1.736 0 10-2.3-1.64 1.736 1.736 0 00.071.464c-.1-.009-.189-.029-.288-.029A3.245 3.245 0 002.922 7.91a2.6 2.6 0 000 5.18A3.245 3.245 0 005.5 18.326c.1 0 .192-.02.288-.029a1.736 1.736 0 102.224-1.176"
    />,
    <path
      className="music-genre-brain_svg__a"
      d="M5.347 8.748c.045 0 .087.013.133.013a2.826 2.826 0 002.826-2.826M12.988 3.879a1.736 1.736 0 112.3-1.64 1.736 1.736 0 01-.071.464c.1-.009.189-.029.288-.029a3.245 3.245 0 012.573 5.236A2.611 2.611 0 0120.3 9.5M15.653 8.748c-.045 0-.087.013-.133.013a2.826 2.826 0 01-2.826-2.826M9.194 2.155a2.605 2.605 0 012.612 0M10.5 6.5V15"
    />,
    <circle className="music-genre-brain_svg__a" cx={13.5} cy={21.5} r={2} />,
    <circle className="music-genre-brain_svg__a" cx={21.5} cy={19.5} r={2} />,
    <path
      className="music-genre-brain_svg__a"
      d="M23.5 19.5v-6.795a1 1 0 00-1.184-.983l-6 1.125a1 1 0 00-.816.983v7.67"
    />
  );

export default SvgMusicGenreBrain;
