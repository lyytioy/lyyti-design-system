import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleManActionsMail = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-man-actions-mail_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="single-man-actions-mail_svg__cls-1"
      d="M23.25 15.75v6a1.5 1.5 0 01-1.5 1.5h-9a1.5 1.5 0 01-1.5-1.5v-6"
    />,
    <path
      className="single-man-actions-mail_svg__cls-1"
      d="M23.25 15.75a1.5 1.5 0 00-1.5-1.5h-9a1.5 1.5 0 00-1.5 1.5L16.455 19a1.5 1.5 0 001.59 0z"
    />,
    <circle
      className="single-man-actions-mail_svg__cls-1"
      cx={6}
      cy={3.75}
      r={3}
    />,
    <path
      className="single-man-actions-mail_svg__cls-1"
      d="M10.742 11.245A5.251 5.251 0 00.75 13.5v2.25H3l.75 7.5h4.5l.185-1.85M6 8.25v6"
    />
  );

export default SvgSingleManActionsMail;
