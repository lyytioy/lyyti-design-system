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
    <circle
      className="single-neutral-actions-text_svg__cls-1"
      cx={5.5}
      cy={4}
      r={3.5}
    />,
    <path
      className="single-neutral-actions-text_svg__cls-1"
      d="M9 10.43A5 5 0 00.5 14v3.5H3l.5 6h4l.5-6h1"
    />,
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
      d="M14.5 14.5h6M14.5 17.5h6M14.5 20.5h2.25"
    />
  );

export default SvgSingleNeutralActionsText;
