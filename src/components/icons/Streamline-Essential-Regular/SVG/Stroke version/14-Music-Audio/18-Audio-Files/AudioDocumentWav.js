import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAudioDocumentWav = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".audio-document-wav_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="audio-document-wav_svg__a"
      d="M1.5 3.75h21M1.5 20.25h21M18 8.25v2.55a8.932 8.932 0 001.5 4.954A8.932 8.932 0 0021 10.8V8.25M3 8.25v2.017a8.982 8.982 0 00.644 3.342L4.5 15.75 6 10.5l1.5 5.25.856-2.141A8.982 8.982 0 009 10.267V8.25M12 15.75v-6a1.5 1.5 0 013 0v6M12 12.75h3"
    />
  );

export default SvgAudioDocumentWav;
