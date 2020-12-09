import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgImageFileSvg = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".image-file-svg_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="image-file-svg_svg__a"
      d="M20.5 23.5a1 1 0 001-1V6.475A5.975 5.975 0 0015.525.5H3.5a1 1 0 00-1 1v21a1 1 0 001 1z"
    />,
    <path
      className="image-file-svg_svg__a"
      d="M16.5.58V4.5a1 1 0 001 1h3.92M8.5 12.5H6.8a1.3 1.3 0 00-.723 2.387l1.84 1.226A1.3 1.3 0 017.2 18.5H5.5M13.5 12.5V14a7.5 7.5 0 01-1.5 4.5 7.5 7.5 0 01-1.5-4.5v-1.5M18.5 14.5V14a1.5 1.5 0 00-3 0v3a1.5 1.5 0 003 0v-.5h-1"
    />
  );

export default SvgImageFileSvg;
