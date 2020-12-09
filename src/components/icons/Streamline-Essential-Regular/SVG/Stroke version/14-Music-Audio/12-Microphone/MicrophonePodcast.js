import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMicrophonePodcast = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".microphone-podcast_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="microphone-podcast_svg__a"
      d="M9.751 13.491A2.462 2.462 0 017.5 11.038V3.212A2.462 2.462 0 019.962.75h4.076A2.462 2.462 0 0116.5 3.212v7.826a2.462 2.462 0 01-2.25 2.453M7.5 5.25h3M7.5 8.25h3"
    />,
    <circle className="microphone-podcast_svg__a" cx={12} cy={13.5} r={2.25} />,
    <path
      className="microphone-podcast_svg__a"
      d="M12 15.75v3.75M15.75 23.25a3.75 3.75 0 00-7.5 0z"
    />
  );

export default SvgMicrophonePodcast;
