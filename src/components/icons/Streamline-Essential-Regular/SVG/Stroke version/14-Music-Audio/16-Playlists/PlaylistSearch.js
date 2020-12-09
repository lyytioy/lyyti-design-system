import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPlaylistSearch = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".playlist-search_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="playlist-search_svg__a"
      d="M20.25 7.5V2.25a1.5 1.5 0 00-1.5-1.5H2.25a1.5 1.5 0 00-1.5 1.5v15a1.5 1.5 0 001.5 1.5h4.5"
    />,
    <circle
      className="playlist-search_svg__a"
      cx={6.389}
      cy={13.139}
      r={1.875}
    />,
    <path
      className="playlist-search_svg__a"
      d="M8.264 13.139V6.345A1.5 1.5 0 019.29 4.922l4.5-1.25A1.5 1.5 0 0115.764 5.1v2.414"
    />,
    <circle
      className="playlist-search_svg__a"
      cx={15.75}
      cy={15.75}
      r={5.25}
    />,
    <path className="playlist-search_svg__a" d="M23.25 23.25l-3.788-3.788" />
  );

export default SvgPlaylistSearch;
