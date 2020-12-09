import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAudioDocumentMid = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".audio-document-mid_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="audio-document-mid_svg__a"
      d="M2.25 3.75h19.5M2.25 20.25h19.5M9.75 15.75v-7.5L7.5 12 5.25 8.25v7.5M12.75 15.75v-7.5M15.75 15.75a3 3 0 003-3v-1.5a3 3 0 00-3-3z"
    />
  );

export default SvgAudioDocumentMid;
