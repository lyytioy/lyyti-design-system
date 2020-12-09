import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgImageDocumentPng = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".image-document-png_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="image-document-png_svg__a"
      x={0.5}
      y={5}
      width={23}
      height={14}
      rx={1}
      ry={1}
    />,
    <path
      className="image-document-png_svg__a"
      d="M10.5 15V9l3 6V9M8.5 10.5A1.5 1.5 0 017 12H5.5V9H7a1.5 1.5 0 011.5 1.5zM5.5 15v-3M18.5 11v-.5a1.5 1.5 0 00-3 0v3a1.5 1.5 0 003 0V13h-1"
    />
  );

export default SvgImageDocumentPng;
