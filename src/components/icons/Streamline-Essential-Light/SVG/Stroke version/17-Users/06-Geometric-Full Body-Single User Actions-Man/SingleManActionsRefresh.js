import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleManActionsRefresh = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-man-actions-refresh_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="single-man-actions-refresh_svg__cls-1"
      d="M15 18.5h-3.5V22M22.917 19.733A5.572 5.572 0 0112.1 18.5M20 16.5h3.5V13M12.083 15.267A5.572 5.572 0 0122.9 16.5M2.484 2.223A5.809 5.809 0 006.667 4a5.822 5.822 0 002.3-.473"
    />,
    <circle
      className="single-man-actions-refresh_svg__cls-1"
      cx={5.5}
      cy={4}
      r={3.5}
    />,
    <path
      className="single-man-actions-refresh_svg__cls-1"
      d="M10.013 11.845A5 5 0 00.5 14v3.5H3l.5 6h4l.5-6h1.482"
    />
  );

export default SvgSingleManActionsRefresh;
