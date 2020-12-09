import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVideDocumentM4V = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".vide-document-m4v_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="vide-document-m4v_svg__a"
      x={0.5}
      y={5}
      width={23}
      height={14}
      rx={1}
      ry={1}
    />,
    <path
      className="vide-document-m4v_svg__a"
      d="M5.5 15V9L7 12l1.5-3v6M13.487 15v-2M13.487 13V9.01A5.5 5.5 0 0010.5 13h2.987M18.5 9v1.5A7.5 7.5 0 0117 15a7.5 7.5 0 01-1.5-4.5V9"
    />
  );

export default SvgVideDocumentM4V;
