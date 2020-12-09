import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVideDocumentMp4 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".vide-document-mp4_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="vide-document-mp4_svg__a"
      x={0.5}
      y={5}
      width={23}
      height={14}
      rx={1}
      ry={1}
    />,
    <path
      className="vide-document-mp4_svg__a"
      d="M5.513 15V9l1.5 3 1.5-3v6M13.513 10.5a1.5 1.5 0 01-1.5 1.5h-1.5V9h1.5a1.5 1.5 0 011.5 1.5zM10.513 15v-3M18.5 15v-2M18.5 13V9.01A5.5 5.5 0 0015.513 13H18.5"
    />
  );

export default SvgVideDocumentMp4;
