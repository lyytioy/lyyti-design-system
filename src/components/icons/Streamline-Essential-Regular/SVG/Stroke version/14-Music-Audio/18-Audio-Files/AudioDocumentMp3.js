import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAudioDocumentMp3 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".audio-document-mp3_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="audio-document-mp3_svg__a"
      d="M1.5 3.75h21M1.5 20.25h21M7.5 15.75v-7.5L5.25 12 3 8.25v7.5M10.5 15.75v-7.5M10.5 8.25h.75a2.25 2.25 0 010 4.5h-.75M16.5 9.75a1.5 1.5 0 011.5-1.5l1.135.005A1.873 1.873 0 0119.127 12a1.873 1.873 0 01.008 3.745L18 15.75a1.5 1.5 0 01-1.5-1.5"
    />
  );

export default SvgAudioDocumentMp3;
