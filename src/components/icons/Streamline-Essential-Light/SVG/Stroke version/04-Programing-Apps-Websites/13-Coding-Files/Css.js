import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCss = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".css_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="css_svg__a"
      x={0.5}
      y={5.004}
      width={23}
      height={14}
      rx={1}
      ry={1}
    />,
    <path
      className="css_svg__a"
      d="M8.5 15a3 3 0 010-6M13.5 9h-1.7a1.3 1.3 0 00-.723 2.386l1.84 1.227A1.3 1.3 0 0112.2 15h-1.7M18.5 9h-1.7a1.3 1.3 0 00-.723 2.386l1.84 1.227A1.3 1.3 0 0117.2 15h-1.7"
    />
  );

export default SvgCss;
