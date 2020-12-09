import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgImageDocumentJpg = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".image-document-jpg_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="image-document-jpg_svg__a"
      d="M1.5 3.75h21M1.5 20.25h21M7.5 8.25v6a1.5 1.5 0 01-1.5 1.5H4.5M10.5 15.75v-7.5M10.5 8.25h.75a2.25 2.25 0 010 4.5h-.75M18.75 12.75h.75v1.5a1.5 1.5 0 01-3 0v-4.5a1.5 1.5 0 011.5-1.5h1.5"
    />
  );

export default SvgImageDocumentJpg;
