import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAudioDocumentWav1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".audio-document-wav-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="audio-document-wav-1_svg__a"
      x={0.5}
      y={0.5}
      width={23}
      height={23}
      rx={1}
      ry={1}
    />,
    <path
      className="audio-document-wav-1_svg__a"
      d="M9.5 11.5v2.585C9.5 16.5 9 18.5 8 19.5L6.5 14 5 19.5c-1-1-1.5-3-1.5-5.415V11.5M11.5 19.5v-6a2 2 0 014 0v6M11.5 15.5h4M21.5 11.5v2.3a9.124 9.124 0 01-2 5.7 9.124 9.124 0 01-2-5.7v-2.3"
    />
  );

export default SvgAudioDocumentWav1;
