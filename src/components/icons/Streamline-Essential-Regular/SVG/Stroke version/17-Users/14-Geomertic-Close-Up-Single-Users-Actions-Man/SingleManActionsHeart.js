import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleManActionsHeart = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-man-actions-heart_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="single-man-actions-heart_svg__cls-1"
      d="M.75 17.25a6.753 6.753 0 019.4-6.208M3.945 2.781a6.848 6.848 0 004.93 2.094 6.847 6.847 0 002.712-.558"
    />,
    <circle
      className="single-man-actions-heart_svg__cls-1"
      cx={7.5}
      cy={4.875}
      r={4.125}
    />,
    <path
      className="single-man-actions-heart_svg__cls-1"
      d="M17.25 23.25l-5.114-5.335a3.025 3.025 0 01-.567-3.492 3.026 3.026 0 014.846-.787l.835.835.835-.835a3.025 3.025 0 014.845.787 3.027 3.027 0 01-.566 3.492z"
    />
  );

export default SvgSingleManActionsHeart;
