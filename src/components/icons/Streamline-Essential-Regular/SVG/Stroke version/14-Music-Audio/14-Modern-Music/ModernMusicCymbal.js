import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgModernMusicCymbal = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".modern-music-cymbal_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="modern-music-cymbal_svg__a"
      d="M13.501 23.25v-7.598M10.501 15.653v7.597M13.5 5.348V2.767a.519.519 0 00-.521-.517h-1.956a.519.519 0 00-.517.521l.005 2.572M12.001.75v1.5M2.25 9h19.5"
    />,
    <path
      className="modern-music-cymbal_svg__a"
      d="M19.685 9a1.729 1.729 0 00-.185-.75c-.75-1.5-4.186-3-7.5-3s-6.75 1.5-7.5 3a1.729 1.729 0 00-.185.75M2.25 12h19.5M19.685 12a1.729 1.729 0 01-.185.75c-.75 1.5-4.186 3-7.5 3s-6.75-1.5-7.5-3a1.729 1.729 0 01-.185-.75"
    />
  );

export default SvgModernMusicCymbal;
