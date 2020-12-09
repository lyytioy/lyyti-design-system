import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleManActionsMail = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-man-actions-mail_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="single-man-actions-mail_svg__cls-1"
      d="M23.5 16v6.5a1 1 0 01-1 1h-10a1 1 0 01-1-1V16"
    />,
    <path
      className="single-man-actions-mail_svg__cls-1"
      d="M23.5 16v-.5a1 1 0 00-1-1h-10a1 1 0 00-1 1v.5l5.2 3.253a1.5 1.5 0 001.59 0zM2.484 2.723A5.809 5.809 0 006.667 4.5a5.822 5.822 0 002.3-.473"
    />,
    <circle
      className="single-man-actions-mail_svg__cls-1"
      cx={5.5}
      cy={4.5}
      r={3.5}
    />,
    <path
      className="single-man-actions-mail_svg__cls-1"
      d="M10.013 12.345A5 5 0 00.5 14.5V18H3l.5 6h4l.5-6h1.482"
    />
  );

export default SvgSingleManActionsMail;
