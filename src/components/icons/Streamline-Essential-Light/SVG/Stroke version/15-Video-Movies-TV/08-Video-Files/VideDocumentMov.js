import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVideDocumentMov = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".vide-document-mov_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="vide-document-mov_svg__a"
      x={0.5}
      y={5}
      width={23}
      height={14}
      rx={1}
      ry={1}
    />,
    <path
      className="vide-document-mov_svg__a"
      d="M5.5 15V9L7 12l1.5-3v6M13.5 13.5a1.5 1.5 0 01-3 0v-3a1.5 1.5 0 013 0zM18.5 9v1.5A7.5 7.5 0 0117 15a7.5 7.5 0 01-1.5-4.5V9"
    />
  );

export default SvgVideDocumentMov;
