import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleNeutralActionsText = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-neutral-actions-text_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="single-neutral-actions-text_svg__cls-1"
      x={11.5}
      y={11.5}
      width={12}
      height={12}
      rx={1}
      ry={1}
    />,
    <path
      className="single-neutral-actions-text_svg__cls-1"
      d="M14.5 14.5h6M14.5 17.5h6M14.5 20.5h2.25M8.5 16.5h-8a8.719 8.719 0 01.7-3.322c.49-.981 2.539-1.661 5.111-2.613.695-.258.581-2.074.273-2.413a5.127 5.127 0 01-1.34-3.978A3.354 3.354 0 018.5.5a3.354 3.354 0 013.256 3.674 5.127 5.127 0 01-1.336 3.978 2.31 2.31 0 00-.234 1.348"
    />
  );

export default SvgSingleNeutralActionsText;
