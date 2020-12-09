import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgImageDocumentSvg = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".image-document-svg_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="image-document-svg_svg__a"
      d="M1.5 3.75h21M1.5 20.25h21M10.5 8.25v2.55a8.932 8.932 0 001.5 4.95 8.932 8.932 0 001.5-4.95V8.25M7.5 8.25H6a1.5 1.5 0 00-1.5 1.5c0 2.25 3 2.25 3 4.5a1.5 1.5 0 01-1.5 1.5H4.5M18.75 12.75h.75v1.5a1.5 1.5 0 01-3 0v-4.5a1.5 1.5 0 011.5-1.5h1.5"
    />
  );

export default SvgImageDocumentSvg;
