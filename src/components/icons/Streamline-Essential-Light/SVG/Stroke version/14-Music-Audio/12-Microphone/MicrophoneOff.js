import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMicrophoneOff = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".microphone-off_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="microphone-off_svg__a"
      d="M14.414 18.188A6 6 0 016.5 12.5V10M7.044 4A6 6 0 0118.5 6.5v6a5.968 5.968 0 01-.545 2.5M19.46 16.492A8.062 8.062 0 0020.5 12.5v-2"
    />,
    <path
      className="microphone-off_svg__a"
      d="M4.5 10.5v2a7.93 7.93 0 008 8 8.053 8.053 0 003.977-1.032M12.5 20.5v3M1 1l22 22"
    />
  );

export default SvgMicrophoneOff;
