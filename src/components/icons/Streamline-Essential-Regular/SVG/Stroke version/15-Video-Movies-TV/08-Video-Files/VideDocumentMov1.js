import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVideDocumentMov1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".vide-document-mov-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="vide-document-mov-1_svg__a"
      x={0.75}
      y={0.75}
      width={22.5}
      height={22.5}
      rx={1}
      ry={1}
    />,
    <path
      className="vide-document-mov-1_svg__a"
      d="M8.25 18v-7.5L6 14.25 3.75 10.5V18M11.25 18v-7.5M11.25 10.5H12a2.25 2.25 0 010 4.5h-.75M19.5 15h.75v1.5a1.5 1.5 0 01-3 0V12a1.5 1.5 0 011.5-1.5h1.5"
    />
  );

export default SvgVideDocumentMov1;
