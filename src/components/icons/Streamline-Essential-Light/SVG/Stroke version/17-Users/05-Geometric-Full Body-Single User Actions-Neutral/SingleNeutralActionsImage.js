import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleNeutralActionsImage = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-neutral-actions-image_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle
      className="single-neutral-actions-image_svg__cls-1"
      cx={5.5}
      cy={4}
      r={3.5}
    />,
    <path
      className="single-neutral-actions-image_svg__cls-1"
      d="M9 10.43A5 5 0 00.5 14v3.5H3l.5 6h4l.5-6h1"
    />,
    <rect
      className="single-neutral-actions-image_svg__cls-1"
      x={11.5}
      y={11.5}
      width={12}
      height={12}
      rx={1}
      ry={1}
    />,
    <circle
      className="single-neutral-actions-image_svg__cls-1"
      cx={15.625}
      cy={15.5}
      r={1.5}
    />,
    <path
      className="single-neutral-actions-image_svg__cls-1"
      d="M23.5 21.25l-2.391-3.587a.75.75 0 00-1.239-.014l-2 2.851-1.236-.989a.751.751 0 00-1.093.17L13 23.5"
    />
  );

export default SvgSingleNeutralActionsImage;
