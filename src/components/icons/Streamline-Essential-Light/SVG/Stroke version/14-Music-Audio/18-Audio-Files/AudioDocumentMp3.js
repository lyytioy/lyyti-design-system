import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAudioDocumentMp3 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".audio-document-mp3_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="audio-document-mp3_svg__a"
      x={0.5}
      y={5}
      width={23}
      height={14}
      rx={1}
      ry={1}
    />,
    <path
      className="audio-document-mp3_svg__a"
      d="M5.5 15V9L7 12l1.5-3v6M13.5 10.5A1.5 1.5 0 0112 12h-1.5V9H12a1.5 1.5 0 011.5 1.5zM10.5 15v-3M15.5 10.2a1.114 1.114 0 011-1.2h.757a1.392 1.392 0 011.243 1.5 1.391 1.391 0 01-1.248 1.5 1.391 1.391 0 011.248 1.5 1.392 1.392 0 01-1.243 1.5H16.5a1.114 1.114 0 01-1-1.2"
    />
  );

export default SvgAudioDocumentMp3;
