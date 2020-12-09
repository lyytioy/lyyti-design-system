import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVideDocumentAvi = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".vide-document-avi_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="vide-document-avi_svg__a"
      d="M1.5 3.75h21M1.5 20.25h21M6 15.75v-6a1.5 1.5 0 013 0v6M6 12.75h3M12 8.25v2.55a8.932 8.932 0 001.5 4.954A8.932 8.932 0 0015 10.8V8.25M18 15.75v-7.5"
    />
  );

export default SvgVideDocumentAvi;
