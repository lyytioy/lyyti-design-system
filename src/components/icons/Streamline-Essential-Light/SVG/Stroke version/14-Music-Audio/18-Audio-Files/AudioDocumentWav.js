import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAudioDocumentWav = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".audio-document-wav_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="audio-document-wav_svg__a"
      x={0.5}
      y={5}
      width={23}
      height={14}
      rx={1}
      ry={1}
    />,
    <path
      className="audio-document-wav_svg__a"
      d="M9.5 9v1.764A9.468 9.468 0 018.5 15l-1-4-1 4a9.468 9.468 0 01-1-4.236V9M11.5 15v-4.5a1.5 1.5 0 013 0V15M11.5 12h3M19.5 9v1.5A7.5 7.5 0 0118 15a7.5 7.5 0 01-1.5-4.5V9"
    />
  );

export default SvgAudioDocumentWav;
