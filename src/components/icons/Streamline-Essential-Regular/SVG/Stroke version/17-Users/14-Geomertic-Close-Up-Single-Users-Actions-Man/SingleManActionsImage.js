import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleManActionsImage = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-man-actions-image_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="single-man-actions-image_svg__cls-1"
      d="M.75 17.25A6.75 6.75 0 017.5 10.5a6.9 6.9 0 01.75.041M3.945 2.781a6.848 6.848 0 004.93 2.094 6.847 6.847 0 002.712-.558"
    />,
    <circle
      className="single-man-actions-image_svg__cls-1"
      cx={7.5}
      cy={4.875}
      r={4.125}
    />,
    <rect
      className="single-man-actions-image_svg__cls-1"
      x={11.25}
      y={11.25}
      width={12}
      height={12}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="single-man-actions-image_svg__cls-1"
      d="M15.375 14.25a.375.375 0 11-.375.375.375.375 0 01.375-.375M23.25 21l-2.391-3.587a.75.75 0 00-1.239-.013l-2 2.851-1.237-.989a.749.749 0 00-1.092.169L12.75 23.25"
    />
  );

export default SvgSingleManActionsImage;
