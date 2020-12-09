import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAudioDocumentAac = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".audio-document-aac_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="audio-document-aac_svg__a"
      x={0.5}
      y={5}
      width={23}
      height={14}
      rx={1}
      ry={1}
    />,
    <path
      className="audio-document-aac_svg__a"
      d="M5.5 15v-4.5a1.5 1.5 0 013 0V15M5.5 12h3M10.5 15v-4.5a1.5 1.5 0 013 0V15M10.5 12h3M18.5 15a3 3 0 010-6"
    />
  );

export default SvgAudioDocumentAac;
