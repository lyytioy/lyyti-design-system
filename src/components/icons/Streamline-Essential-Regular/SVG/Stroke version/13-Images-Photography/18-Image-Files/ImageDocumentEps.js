import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgImageDocumentEps = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".image-document-eps_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="image-document-eps_svg__a"
      d="M1.5 3.75h21M1.5 20.25h21M7.5 15.75H6a1.5 1.5 0 01-1.5-1.5v-4.5A1.5 1.5 0 016 8.25h1.5M4.5 12.75h3M10.5 15.75v-7.5M10.5 8.25h.75a2.25 2.25 0 010 4.5h-.75M19.5 8.25H18a1.5 1.5 0 00-1.5 1.5c0 2.25 3 2.25 3 4.5a1.5 1.5 0 01-1.5 1.5h-1.5"
    />
  );

export default SvgImageDocumentEps;
