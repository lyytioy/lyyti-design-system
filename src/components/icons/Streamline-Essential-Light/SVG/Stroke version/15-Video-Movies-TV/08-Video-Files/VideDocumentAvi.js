import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVideDocumentAvi = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".vide-document-avi_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="vide-document-avi_svg__a"
      x={0.5}
      y={5}
      width={23}
      height={14}
      rx={1}
      ry={1}
    />,
    <path
      className="vide-document-avi_svg__a"
      d="M5.5 15v-4.5a1.5 1.5 0 013 0V15M5.5 12h3M13.5 9v1.5A7.5 7.5 0 0112 15a7.5 7.5 0 01-1.5-4.5V9M16.5 9v6M15.5 15h2M15.5 9h2"
    />
  );

export default SvgVideDocumentAvi;
