import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCameraSettingsFrame = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".camera-settings-frame_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="camera-settings-frame_svg__a"
      d="M15 9l-.75-1.5h-4.5L9 9h-.75a1.5 1.5 0 00-1.5 1.5V15a1.5 1.5 0 001.5 1.5h7.5a1.5 1.5 0 001.5-1.5v-4.5a1.5 1.5 0 00-1.5-1.5z"
    />,
    <circle
      className="camera-settings-frame_svg__a"
      cx={12}
      cy={12.375}
      r={1.875}
    />,
    <path
      className="camera-settings-frame_svg__a"
      d="M21 5.25l2.25 2.25L21 9.75 23.25 12 21 14.25l2.25 2.25L21 18.75M3 5.25L.75 7.5 3 9.75.75 12 3 14.25.75 16.5 3 18.75"
    />
  );

export default SvgCameraSettingsFrame;
