import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVideDocumentFlv = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".vide-document-flv_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="vide-document-flv_svg__a"
      x={0.5}
      y={5}
      width={23}
      height={14}
      rx={1}
      ry={1}
    />,
    <path
      className="vide-document-flv_svg__a"
      d="M5.5 15v-5a1 1 0 011-1h2M5.5 12h2M10.5 9v5a1 1 0 001 1h2M18.5 9v1.5A7.5 7.5 0 0117 15a7.5 7.5 0 01-1.5-4.5V9"
    />
  );

export default SvgVideDocumentFlv;
