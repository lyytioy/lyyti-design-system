import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMicrophonePodcastOnAir = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".microphone-podcast-on-air_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="microphone-podcast-on-air_svg__a"
      d="M5.5 19.5a1 1 0 01-2 0v-1a1 1 0 012 0zM7.5 20.5v-3l2 3v-3M12.5 20.5v-2a1 1 0 012 0v2M12.5 19.5h2M16.5 17.5v3M19.5 17.5a1 1 0 010 2h-1v-2zM18.5 20.5v-1M19.5 19.5l1 1"
    />,
    <rect
      className="microphone-podcast-on-air_svg__a"
      x={0.5}
      y={14.5}
      width={23}
      height={9}
      rx={2}
      ry={2}
    />,
    <path
      className="microphone-podcast-on-air_svg__a"
      d="M15.5 8.5c0 1.657-.843 3-2.5 3h-3c-1.657 0-2.5-1.343-2.5-3v-5c0-1.656.843-3 2.5-3h3c1.657 0 2.5 1.344 2.5 3zM11.502 9l-.002 5.489M7.502 4.5h3M7.502 6.5h3M15.502 4.5h-2M15.502 6.5h-2"
    />
  );

export default SvgMicrophonePodcastOnAir;
