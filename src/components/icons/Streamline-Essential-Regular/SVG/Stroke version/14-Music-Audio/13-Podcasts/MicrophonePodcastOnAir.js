import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMicrophonePodcastOnAir = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".microphone-podcast-on-air_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="microphone-podcast-on-air_svg__a"
      d="M13.5 20.25v-4.5l3 4.5v-4.5M9 15.75a1.5 1.5 0 00-1.5 1.5v1.5a1.5 1.5 0 003 0v-1.5a1.5 1.5 0 00-1.5-1.5z"
    />,
    <rect
      className="microphone-podcast-on-air_svg__a"
      x={0.75}
      y={12.75}
      width={22.5}
      height={10.5}
      rx={2}
      ry={2}
    />,
    <path className="microphone-podcast-on-air_svg__a" d="M12 12.75v-3" />,
    <rect
      className="microphone-podcast-on-air_svg__a"
      x={8.25}
      y={0.75}
      width={7.5}
      height={9}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="microphone-podcast-on-air_svg__a"
      d="M8.25 3.75h3M8.25 6.75h3"
    />
  );

export default SvgMicrophonePodcastOnAir;
