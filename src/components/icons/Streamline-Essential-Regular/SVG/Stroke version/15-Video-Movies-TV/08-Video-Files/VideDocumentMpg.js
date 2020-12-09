import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVideDocumentMpg = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".vide-document-mpg_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="vide-document-mpg_svg__a"
      d="M1.5 3.75h21M1.5 20.25h21M7.5 15.75v-7.5L5.25 12 3 8.25v7.5M14.981 15.735v-1.5M14.981 14.235V8.25a8.26 8.26 0 00-4.481 5.985h4.481M18 8.25v2.55a8.932 8.932 0 001.5 4.954A8.932 8.932 0 0021 10.8V8.25"
    />
  );

export default SvgVideDocumentMpg;
