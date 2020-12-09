import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMicrophonePodcast1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".microphone-podcast-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path className="microphone-podcast-1_svg__a" d="M12 18v2.25" />,
    <rect
      className="microphone-podcast-1_svg__a"
      x={7.5}
      y={0.75}
      width={9}
      height={14.25}
      rx={4.5}
      ry={4.5}
    />,
    <path
      className="microphone-podcast-1_svg__a"
      d="M19.5 8.25v2.566A7.369 7.369 0 0112 18a7.369 7.369 0 01-7.5-7.184V8.25M4.514 11.25h14.972M3 23.25h2.25M8.25 23.25h2.25M13.5 23.25h2.25M18.75 23.25H21"
    />
  );

export default SvgMicrophonePodcast1;
