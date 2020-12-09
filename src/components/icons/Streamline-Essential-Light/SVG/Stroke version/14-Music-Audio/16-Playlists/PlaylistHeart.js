import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPlaylistHeart = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".playlist-heart_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="playlist-heart_svg__a"
      d="M18.5 11.5v-10a1 1 0 00-1-1h-16a1 1 0 00-1 1v16a1 1 0 001 1h10"
    />,
    <circle className="playlist-heart_svg__a" cx={12} cy={12} r={1.5} />,
    <circle className="playlist-heart_svg__a" cx={5} cy={13} r={1.5} />,
    <path
      className="playlist-heart_svg__a"
      d="M6.5 13V7.255a1 1 0 01.725-.962l5-1.428a1 1 0 011.275.961V12M18.643 23.5L14.5 19.182a2.45 2.45 0 01-.459-2.828 2.449 2.449 0 013.922-.636l.676.676.676-.676a2.449 2.449 0 013.922.636 2.45 2.45 0 01-.458 2.828z"
    />
  );

export default SvgPlaylistHeart;
