import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDownloadSquare = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".download-square_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="download-square_svg__a"
      x={0.75}
      y={0.75}
      width={22.5}
      height={22.5}
      rx={3}
      ry={3}
    />,
    <path
      className="download-square_svg__a"
      d="M15 15v-4.5h3.75L12 3.75 5.25 10.5H9V15M15 18v1.5M9 18v1.5"
    />
  );

export default SvgDownloadSquare;
