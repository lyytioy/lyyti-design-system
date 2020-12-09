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
      d="M23.5 21.25l-2.391-3.587a.75.75 0 00-1.239-.014l-2 2.851-1.236-.989a.751.751 0 00-1.093.17L13 23.5M9.5 16.5h-9a8.719 8.719 0 01.7-3.322c.49-.981 2.539-1.661 5.111-2.613.695-.258.581-2.074.273-2.413a5.127 5.127 0 01-1.34-3.978A3.354 3.354 0 018.5.5a3.354 3.354 0 013.256 3.674 5.127 5.127 0 01-1.336 3.978A2.661 2.661 0 0010.271 10"
    />
  );

export default SvgSingleNeutralActionsImage;
