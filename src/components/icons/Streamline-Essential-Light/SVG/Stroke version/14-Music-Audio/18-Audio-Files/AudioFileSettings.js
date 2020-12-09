import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAudioFileSettings = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".audio-file-settings_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="audio-file-settings_svg__a"
      d="M9.5 23.5h-8a1 1 0 01-1-1v-21a1 1 0 011-1h13.293a1 1 0 01.707.293L19.207 4.5a1 1 0 01.293.707V8.5"
    />,
    <path
      className="audio-file-settings_svg__a"
      d="M9.5 14c0 .933-1.119 1.687-2.5 1.687S4.5 14.933 4.5 14s1.119-1.686 2.5-1.686 2.5.754 2.5 1.686z"
    />,
    <path
      className="audio-file-settings_svg__a"
      d="M9.5 14V7.223a1 1 0 011.5-.868L13 7.5"
    />,
    <circle
      className="audio-file-settings_svg__a"
      cx={17.75}
      cy={17.031}
      r={1.437}
    />,
    <path
      className="audio-file-settings_svg__a"
      d="M18.971 11.47l.424 1.392a.951.951 0 001.124.653l1.412-.327a1.283 1.283 0 011.221 2.126l-.988 1.065a.96.96 0 000 1.3l.988 1.065a1.283 1.283 0 01-1.221 2.126l-1.412-.328a.953.953 0 00-1.119.658l-.424 1.392a1.275 1.275 0 01-2.442 0l-.429-1.392a.953.953 0 00-1.124-.653l-1.412.328a1.283 1.283 0 01-1.221-2.126l.988-1.065a.96.96 0 000-1.3l-.988-1.065a1.283 1.283 0 011.221-2.126l1.412.327a.951.951 0 001.124-.653l.424-1.392a1.275 1.275 0 012.442-.005z"
    />
  );

export default SvgAudioFileSettings;
