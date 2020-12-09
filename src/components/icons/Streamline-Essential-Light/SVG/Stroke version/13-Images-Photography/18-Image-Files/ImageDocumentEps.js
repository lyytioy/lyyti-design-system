import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgImageDocumentEps = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".image-document-eps_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="image-document-eps_svg__a"
      x={0.5}
      y={5}
      width={23}
      height={14}
      rx={1}
      ry={1}
    />,
    <path
      className="image-document-eps_svg__a"
      d="M8.5 15h-2a1 1 0 01-1-1v-4a1 1 0 011-1h2M5.5 12h2M13.5 10.5A1.5 1.5 0 0112 12h-1.5V9H12a1.5 1.5 0 011.5 1.5zM10.5 15v-3M18.5 9h-1.7a1.3 1.3 0 00-.723 2.387l1.84 1.226A1.3 1.3 0 0117.2 15h-1.7"
    />
  );

export default SvgImageDocumentEps;
