import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCameraSettingsFlip1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".camera-settings-flip-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="camera-settings-flip-1_svg__a"
      d="M23.25 12A11.251 11.251 0 013 18.751M15 8.25l-.75-1.5h-4.5L9 8.25H7.5A1.5 1.5 0 006 9.75v4.5a1.5 1.5 0 001.5 1.5h9a1.5 1.5 0 001.5-1.5v-4.5a1.5 1.5 0 00-1.5-1.5z"
    />,
    <circle
      className="camera-settings-flip-1_svg__a"
      cx={12}
      cy={11.625}
      r={1.875}
    />,
    <path
      className="camera-settings-flip-1_svg__a"
      d="M6.75 18.75H3v3.75M.75 12A11.251 11.251 0 0121 5.249"
    />,
    <path className="camera-settings-flip-1_svg__a" d="M17.25 5.25H21V1.5" />
  );

export default SvgCameraSettingsFlip1;
