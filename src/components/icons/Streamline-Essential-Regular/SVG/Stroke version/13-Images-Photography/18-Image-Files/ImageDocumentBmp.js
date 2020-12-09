import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgImageDocumentBmp = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".image-document-bmp_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="image-document-bmp_svg__a"
      d="M1.5 3.75h21M1.5 20.25h21M4.5 15.75v-7.5M4.5 8.25H6a1.5 1.5 0 011.5 1.5v.75A1.5 1.5 0 016 12H4.5M4.5 12H6a1.5 1.5 0 011.5 1.5v.75a1.5 1.5 0 01-1.5 1.5H4.5M15 15.75v-7.5L12.75 12 10.5 8.25v7.5M18 15.75v-7.5M18 8.25h.75a2.25 2.25 0 010 4.5H18"
    />
  );

export default SvgImageDocumentBmp;
