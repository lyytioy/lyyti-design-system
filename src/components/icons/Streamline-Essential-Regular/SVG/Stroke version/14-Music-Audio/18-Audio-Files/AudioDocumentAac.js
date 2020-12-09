import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAudioDocumentAac = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".audio-document-aac_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="audio-document-aac_svg__a"
      d="M1.5 3.75h21M1.5 20.25h21M19.5 8.25a3 3 0 00-3 3v1.5a3 3 0 003 3M4.5 15.75v-6a1.5 1.5 0 013 0v6M4.5 12.75h3M10.5 15.75v-6a1.5 1.5 0 013 0v6M10.5 12.75h3"
    />
  );

export default SvgAudioDocumentAac;
