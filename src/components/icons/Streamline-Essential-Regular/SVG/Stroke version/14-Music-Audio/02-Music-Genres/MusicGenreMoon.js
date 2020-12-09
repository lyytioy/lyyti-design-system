import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMusicGenreMoon = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".music-genre-moon_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="music-genre-moon_svg__a"
      d="M8.917 9.821a9.987 9.987 0 01.566-6.949.5.5 0 00-.583-.695 10 10 0 1010.563 15.715.5.5 0 00-.426-.8c-.149.008-.3.013-.45.014a10.033 10.033 0 01-2.4-.281"
    />,
    <circle
      className="music-genre-moon_svg__a"
      cx={13.134}
      cy={13.184}
      r={1.875}
    />,
    <circle
      className="music-genre-moon_svg__a"
      cx={20.634}
      cy={10.934}
      r={1.875}
    />,
    <path
      className="music-genre-moon_svg__a"
      d="M15.009 13.184V6.39a1.5 1.5 0 011.025-1.423l4.5-1.25a1.5 1.5 0 011.975 1.423v5.794"
    />
  );

export default SvgMusicGenreMoon;
