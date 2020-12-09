import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgImageDocumentTiff = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".image-document-tiff_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="image-document-tiff_svg__a"
      x={0.5}
      y={5}
      width={23}
      height={14}
      rx={1}
      ry={1}
    />,
    <path
      className="image-document-tiff_svg__a"
      d="M3.5 9h4M5.5 9v6M10.5 9v6M9.5 15h2M9.5 9h2M13.5 15v-5a1 1 0 011-1h2M13.5 12h2M18.5 15v-5a1 1 0 011-1h2M18.5 12h2"
    />
  );

export default SvgImageDocumentTiff;
