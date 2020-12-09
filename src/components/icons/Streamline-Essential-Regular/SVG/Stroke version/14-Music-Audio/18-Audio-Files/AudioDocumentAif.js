import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAudioDocumentAif = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".audio-document-aif_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="audio-document-aif_svg__a"
      d="M1.5 3.75h21M1.5 20.25h21M6 15.75v-6a1.5 1.5 0 013 0v6M6 12.75h3M12 15.75v-7.5M15 15.75v-6a1.5 1.5 0 011.5-1.5H18M15 12.75h2.25"
    />
  );

export default SvgAudioDocumentAif;
