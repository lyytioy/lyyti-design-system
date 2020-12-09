import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgImageDocumentGif = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".image-document-gif_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="image-document-gif_svg__a"
      d="M1.5 3.75h21M1.5 20.25h21M15 15.75v-6a1.5 1.5 0 011.5-1.5H18M15 12.75h2.25M12 15.75v-7.5M8.25 12.75H9v1.5a1.5 1.5 0 01-3 0v-4.5a1.5 1.5 0 011.5-1.5H9"
    />
  );

export default SvgImageDocumentGif;
