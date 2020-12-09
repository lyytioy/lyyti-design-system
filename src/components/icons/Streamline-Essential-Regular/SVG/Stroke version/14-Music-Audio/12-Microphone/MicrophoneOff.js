import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMicrophoneOff = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".microphone-off_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="microphone-off_svg__a"
      d="M12 19.5v3.75M12.562 16.465A4.535 4.535 0 0112 16.5 4.5 4.5 0 017.5 12v-.75M8.064 3.067A4.5 4.5 0 0112 .75a4.5 4.5 0 014.5 4.5V12"
    />,
    <path
      className="microphone-off_svg__a"
      d="M15.128 18.841A7.7 7.7 0 0112 19.5a7.369 7.369 0 01-7.5-7.184V9.75M19.5 9.75v2.566a6.851 6.851 0 01-.56 2.716M3 2.25L21 21"
    />
  );

export default SvgMicrophoneOff;
