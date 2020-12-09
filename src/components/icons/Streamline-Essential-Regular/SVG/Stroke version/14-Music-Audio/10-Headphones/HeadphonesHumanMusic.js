import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgHeadphonesHumanMusic = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".headphones-human-music_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="headphones-human-music_svg__a"
      d="M20.33 12.035c.455 1.2.913 2.448 1.42 3.715h-3V18a3 3 0 01-3 3h-1.5v2.25M13.07 2.656a7.552 7.552 0 011.971.923M3.75 23.25v-4.765A9.363 9.363 0 015.1 3.712"
    />,
    <circle
      className="headphones-human-music_svg__a"
      cx={15.679}
      cy={8.899}
      r={1.601}
    />,
    <path
      className="headphones-human-music_svg__a"
      d="M23.25 7.173a1.6 1.6 0 11-1.6-1.6 1.6 1.6 0 011.6 1.6z"
    />,
    <path
      className="headphones-human-music_svg__a"
      d="M17.28 8.9v-6a1.282 1.282 0 01.876-1.216l3.408-.868a1.281 1.281 0 011.686 1.215v5.142M7.5 2.25v6.416a3 3 0 103 0V2.25A1.5 1.5 0 009 .75a1.5 1.5 0 00-1.5 1.5z"
    />
  );

export default SvgHeadphonesHumanMusic;
