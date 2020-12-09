import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgImageDocumentBmp = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".image-document-bmp_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="image-document-bmp_svg__a"
      x={0.5}
      y={5}
      width={23}
      height={14}
      rx={1}
      ry={1}
    />,
    <path
      className="image-document-bmp_svg__a"
      d="M8.5 10.5A1.5 1.5 0 017 12H5.5V9H7a1.5 1.5 0 011.5 1.5zM8.5 13.5A1.5 1.5 0 017 15H5.5v-3H7a1.5 1.5 0 011.5 1.5zM10.5 15V9l1.5 3 1.5-3v6M18.5 10.5A1.5 1.5 0 0117 12h-1.5V9H17a1.5 1.5 0 011.5 1.5zM15.5 15v-3"
    />
  );

export default SvgImageDocumentBmp;
