import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDownloadSquare1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".download-square-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="download-square-1_svg__a"
      d="M14.5 9.5v4H17c.55 0 .682.318.293.707l-4.586 4.586a1 1 0 01-1.414 0l-4.586-4.586c-.389-.389-.257-.707.293-.707h2.5v-4M14.5 7.5v-3M9.5 7.5v-3"
    />,
    <rect
      className="download-square-1_svg__a"
      x={0.5}
      y={0.5}
      width={23}
      height={23}
      rx={1}
      ry={1}
    />
  );

export default SvgDownloadSquare1;
