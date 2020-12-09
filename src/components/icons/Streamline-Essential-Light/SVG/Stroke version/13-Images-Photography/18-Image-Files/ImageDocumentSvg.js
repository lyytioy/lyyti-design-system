import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgImageDocumentSvg = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".image-document-svg_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="image-document-svg_svg__a"
      x={0.5}
      y={5}
      width={23}
      height={14}
      rx={1}
      ry={1}
    />,
    <path
      className="image-document-svg_svg__a"
      d="M8.5 9H6.8a1.3 1.3 0 00-.723 2.387l1.84 1.226A1.3 1.3 0 017.2 15H5.5M13.5 9v1.5A7.5 7.5 0 0112 15a7.5 7.5 0 01-1.5-4.5V9M18.5 11v-.5a1.5 1.5 0 00-3 0v3a1.5 1.5 0 003 0V13h-1"
    />
  );

export default SvgImageDocumentSvg;
