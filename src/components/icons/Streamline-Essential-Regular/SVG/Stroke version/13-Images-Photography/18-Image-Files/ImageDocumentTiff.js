import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgImageDocumentTiff = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".image-document-tiff_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="image-document-tiff_svg__a"
      d="M1.5 3.75h21M1.5 20.25h21M12 15.75v-6a1.5 1.5 0 011.5-1.5H15M12 12.75h2.25M18 15.75v-6a1.5 1.5 0 011.5-1.5H21M18 12.75h2.25M9 15.75v-7.5M4.5 15.75v-7.5M3 8.25h3"
    />
  );

export default SvgImageDocumentTiff;
