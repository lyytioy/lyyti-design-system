import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleNeutralActionsHeart = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-neutral-actions-heart_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="single-neutral-actions-heart_svg__cls-1"
      d="M.75 17.25a6.753 6.753 0 019.4-6.208"
    />,
    <circle
      className="single-neutral-actions-heart_svg__cls-1"
      cx={7.5}
      cy={4.875}
      r={4.125}
    />,
    <path
      className="single-neutral-actions-heart_svg__cls-1"
      d="M17.25 23.25l-5.114-5.335a3.025 3.025 0 01-.567-3.492 3.026 3.026 0 014.846-.787l.835.835.835-.835a3.025 3.025 0 014.845.787 3.027 3.027 0 01-.566 3.492z"
    />
  );

export default SvgSingleNeutralActionsHeart;
