import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAudioFileVolume = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".audio-file-volume_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="audio-file-volume_svg__a"
      d="M13.1 8.326a.716.716 0 00-.752.068L8.443 11.25H6.718a.717.717 0 00-.718.718v1.564a.717.717 0 00.718.718h1.725l3.908 2.856a.718.718 0 001.149-.574V8.968a.717.717 0 00-.4-.642zM16.5 14.218a2.071 2.071 0 000-3"
    />,
    <path
      className="audio-file-volume_svg__a"
      d="M22.5 21.75a1.5 1.5 0 01-1.5 1.5H3a1.5 1.5 0 01-1.5-1.5V2.25A1.5 1.5 0 013 .75h15a1.5 1.5 0 011.047.426l3 2.883a1.5 1.5 0 01.453 1.074z"
    />
  );

export default SvgAudioFileVolume;
