import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPodcastLive = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".podcast-live_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="podcast-live_svg__a"
      d="M1.125 4.875a.375.375 0 11-.375.375.375.375 0 01.375-.375M9.125 16.125v-7.5M12.125 8.625v2.546a8.932 8.932 0 001.5 4.954 8.932 8.932 0 001.5-4.954V8.625M3.125 8.625v6a1.5 1.5 0 001.5 1.5h1.5M21.125 16.125h-1.5a1.5 1.5 0 01-1.5-1.5v-4.5a1.5 1.5 0 011.5-1.5h1.5M18.125 13.125h3M4.625 5.625H23.25M23.25 19.125H.75"
    />
  );

export default SvgPodcastLive;
