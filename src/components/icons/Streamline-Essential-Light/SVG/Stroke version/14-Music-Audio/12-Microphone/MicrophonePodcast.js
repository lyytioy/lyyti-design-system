import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMicrophonePodcast = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".microphone-podcast_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="microphone-podcast_svg__a"
      x={5.5}
      y={0.5}
      width={13}
      height={17}
      rx={5}
      ry={5}
    />,
    <path className="microphone-podcast_svg__a" d="M12.5 19.5v-4" />,
    <circle className="microphone-podcast_svg__a" cx={12.5} cy={13.5} r={2} />,
    <path
      className="microphone-podcast_svg__a"
      d="M5.5 9.5h6M5.5 7.5h6M5.5 5.5h6M16.5 9.5h2M16.5 7.5h2M16.5 5.5h2M16.46 22.929a.5.5 0 01-.5.571H9.035a.5.5 0 01-.494-.571 4 4 0 017.919 0z"
    />
  );

export default SvgMicrophonePodcast;
