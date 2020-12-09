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
      d="M23.5 21.25l-2.391-3.587a.75.75 0 00-1.239-.014l-2 2.851-1.236-.989a.751.751 0 00-1.093.17L13 23.5M2.547 4.577A4.637 4.637 0 006 2.974a4.637 4.637 0 003.453 1.6"
    />,
    <circle
      className="single-woman-actions-image_svg__cls-1"
      cx={6}
      cy={4}
      r={3.5}
    />,
    <path
      className="single-woman-actions-image_svg__cls-1"
      d="M9.435 18.5h-.892l-1.054 5h-3l-1.054-5H.5l1.805-6.582a3.8 3.8 0 017.21-.56"
    />
  );

export default SvgSingleWomanActionsImage;
