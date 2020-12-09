import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMusicGenreStars = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".music-genre-stars_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle
      className="music-genre-stars_svg__a"
      cx={8.658}
      cy={21.375}
      r={1.875}
    />,
    <circle
      className="music-genre-stars_svg__a"
      cx={16.158}
      cy={19.125}
      r={1.875}
    />,
    <path
      className="music-genre-stars_svg__a"
      d="M10.533 21.375v-6.794a1.5 1.5 0 011.025-1.423l4.5-1.25a1.5 1.5 0 011.975 1.423v5.794M19.5.75c-.009 2.356 1.14 3.7 3.75 3.75-2.423-.009-3.627 1.291-3.75 3.75-.021-2.32-1.06-3.75-3.75-3.75 2.407-.033 3.741-1.195 3.75-3.75zM6.033 2.935c-.013 3.318 1.6 5.2 5.282 5.283C7.9 8.205 6.206 10.036 6.033 13.5 6 10.232 4.539 8.213.75 8.218c3.39-.048 5.27-1.684 5.283-5.283z"
    />
  );

export default SvgMusicGenreStars;
