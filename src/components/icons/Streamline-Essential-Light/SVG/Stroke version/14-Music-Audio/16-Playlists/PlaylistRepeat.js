import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPlaylistRepeat = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".playlist-repeat_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="playlist-repeat_svg__a"
      d="M18.5 11.75v-10a1 1 0 00-1-1h-16a1 1 0 00-1 1v16a1 1 0 001 1h10"
    />,
    <circle className="playlist-repeat_svg__a" cx={12} cy={12.25} r={1.5} />,
    <circle className="playlist-repeat_svg__a" cx={5} cy={13.25} r={1.5} />,
    <path
      className="playlist-repeat_svg__a"
      d="M6.5 13.25V7.5a1 1 0 01.725-.961l5-1.429a1 1 0 011.275.962v6.178M16.5 21.75a3 3 0 01-3-3 3 3 0 013-3h2M20.5 15.75a3 3 0 013 3 3 3 0 01-3 3h-2"
    />,
    <path
      className="playlist-repeat_svg__a"
      d="M17 14.25l1.5 1.5-1.5 1.5M20 20.25l-1.5 1.5 1.5 1.5"
    />
  );

export default SvgPlaylistRepeat;
