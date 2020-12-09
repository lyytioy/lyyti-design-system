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
    <circle
      className="single-man-actions-heart_svg__cls-1"
      cx={6}
      cy={3.75}
      r={3}
    />,
    <path
      className="single-man-actions-heart_svg__cls-1"
      d="M10.742 11.245A5.251 5.251 0 00.75 13.5v2.25H3l.75 7.5h4.5l.521-5.216M17.25 23.25l-5.114-5.335a3.025 3.025 0 01-.567-3.492 3.026 3.026 0 014.846-.787l.835.835.835-.835a3.025 3.025 0 014.845.787 3.027 3.027 0 01-.566 3.492zM6 8.25v6"
    />
  );

export default SvgSingleManActionsHeart;
