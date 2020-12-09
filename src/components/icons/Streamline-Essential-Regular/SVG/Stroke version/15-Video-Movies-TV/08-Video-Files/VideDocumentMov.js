import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVideDocumentMov = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".vide-document-mov_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="vide-document-mov_svg__a"
      d="M.75 3.75h22.5M.75 20.25h22.5M8.25 15.75v-7.5L6 12 3.75 8.25v7.5M11.25 15.75v-7.5M11.25 8.25H12a2.25 2.25 0 010 4.5h-.75M19.5 12.75h.75v1.5a1.5 1.5 0 01-3 0v-4.5a1.5 1.5 0 011.5-1.5h1.5"
    />
  );

export default SvgVideDocumentMov;
