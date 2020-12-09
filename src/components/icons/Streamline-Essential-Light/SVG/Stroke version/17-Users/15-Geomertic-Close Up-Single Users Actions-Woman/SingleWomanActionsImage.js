import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleWomanActionsImage = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-woman-actions-image_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="single-woman-actions-image_svg__cls-1"
      x={11.5}
      y={11.5}
      width={12}
      height={12}
      rx={1}
      ry={1}
    />,
    <circle
      className="single-woman-actions-image_svg__cls-1"
      cx={15.625}
      cy={15.5}
      r={1.5}
    />,
    <path
      className="single-woman-actions-image_svg__cls-1"
      d="M23.5 21.25l-2.391-3.587a.75.75 0 00-1.239-.014l-2 2.851-1.236-.989a.751.751 0 00-1.093.17L13 23.5M12.6 9.1a5.508 5.508 0 01-.8-3.054V4.8a4.3 4.3 0 10-8.6 0v1.246A5.518 5.518 0 012.4 9.1"
    />,
    <path
      className="single-woman-actions-image_svg__cls-1"
      d="M3.2 5.506a5.691 5.691 0 004.3-1.969 5.691 5.691 0 004.3 1.969M11.288 5.483a3.791 3.791 0 01-7.574 0M8.5 10.571a7.005 7.005 0 00-8 6.929h8"
    />
  );

export default SvgSingleWomanActionsImage;
