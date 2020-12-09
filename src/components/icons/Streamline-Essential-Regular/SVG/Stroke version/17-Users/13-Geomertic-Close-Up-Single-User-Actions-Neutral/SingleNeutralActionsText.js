import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleNeutralActionsText = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-neutral-actions-text_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle
      className="single-neutral-actions-text_svg__cls-1"
      cx={7.5}
      cy={4.875}
      r={4.125}
    />,
    <path
      className="single-neutral-actions-text_svg__cls-1"
      d="M8.25 10.558a6.409 6.409 0 00-.75-.058 6.75 6.75 0 00-6.75 6.75"
    />,
    <rect
      className="single-neutral-actions-text_svg__cls-1"
      x={11.25}
      y={11.25}
      width={12}
      height={12}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="single-neutral-actions-text_svg__cls-1"
      d="M14.25 14.25h6M14.25 17.25h6M14.25 20.25h2.25"
    />
  );

export default SvgSingleNeutralActionsText;
