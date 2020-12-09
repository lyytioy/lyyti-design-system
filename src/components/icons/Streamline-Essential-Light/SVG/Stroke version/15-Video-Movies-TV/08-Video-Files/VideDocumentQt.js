import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVideDocumentQt = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".vide-document-qt_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="vide-document-qt_svg__a"
      x={0.5}
      y={5}
      width={23}
      height={14}
      rx={1}
      ry={1}
    />,
    <path
      className="vide-document-qt_svg__a"
      d="M10.5 13a1.5 1.5 0 01-3 0v-2.5a1.5 1.5 0 013 0zM10.5 16l-2-1.585M12.5 9h4M14.5 9v6"
    />
  );

export default SvgVideDocumentQt;
