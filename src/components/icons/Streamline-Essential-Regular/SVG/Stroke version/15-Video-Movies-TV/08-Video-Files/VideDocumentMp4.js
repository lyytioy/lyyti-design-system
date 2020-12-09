import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVideDocumentMp4 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".vide-document-mp4_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="vide-document-mp4_svg__a"
      d="M1.5 3.75h21M1.5 20.25h21M7.5 15.75v-7.5L5.25 12 3 8.25v7.5M10.5 15.75v-7.5M10.5 8.25h.75a2.25 2.25 0 010 4.5h-.75M20.981 15.75v-1.5M20.981 14.25V8.265A8.258 8.258 0 0016.5 14.25h4.481"
    />
  );

export default SvgVideDocumentMp4;
