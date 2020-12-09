import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleManActionsHeart = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-man-actions-heart_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="single-man-actions-heart_svg__cls-1"
      d="M17.861 23.137a.5.5 0 01-.722 0l-4.753-4.958a3.027 3.027 0 01-.567-3.493 3.026 3.026 0 014.846-.786l.835.835.835-.835a3.026 3.026 0 014.846.786 3.027 3.027 0 01-.567 3.493z"
      id="single-man-actions-heart_svg__New_Symbol_8"
      data-name="New Symbol 8"
    />,
    <path
      className="single-man-actions-heart_svg__cls-1"
      d="M2.484 2.223A5.809 5.809 0 006.667 4a5.822 5.822 0 002.3-.473"
    />,
    <circle
      className="single-man-actions-heart_svg__cls-1"
      cx={5.5}
      cy={4}
      r={3.5}
    />,
    <path
      className="single-man-actions-heart_svg__cls-1"
      d="M10.013 11.845A5 5 0 00.5 14v3.5H3l.5 6h4l.5-6h1.482"
    />
  );

export default SvgSingleManActionsHeart;
