import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVideDocumentFlv = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".vide-document-flv_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="vide-document-flv_svg__a"
      d="M1.5 3.75h21M1.5 20.25h21M4.5 15.75v-6A1.5 1.5 0 016 8.25h1.5M4.5 12.75h2.25M10.5 8.25v6a1.5 1.5 0 001.5 1.5h1.5M16.5 8.25v2.55a8.932 8.932 0 001.5 4.95 8.932 8.932 0 001.5-4.95V8.25"
    />
  );

export default SvgVideDocumentFlv;
