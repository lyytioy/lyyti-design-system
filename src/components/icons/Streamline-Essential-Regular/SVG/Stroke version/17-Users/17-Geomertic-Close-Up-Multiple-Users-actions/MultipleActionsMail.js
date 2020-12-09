import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMultipleActionsMail = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".multiple-actions-mail_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="multiple-actions-mail_svg__cls-1"
      d="M23.25 15.75v6a1.5 1.5 0 01-1.5 1.5h-9a1.5 1.5 0 01-1.5-1.5v-6"
    />,
    <path
      className="multiple-actions-mail_svg__cls-1"
      d="M23.25 15.75a1.5 1.5 0 00-1.5-1.5h-9a1.5 1.5 0 00-1.5 1.5L16.455 19a1.5 1.5 0 001.59 0z"
    />,
    <circle
      className="multiple-actions-mail_svg__cls-1"
      cx={6.75}
      cy={4.125}
      r={3.375}
    />,
    <circle
      className="multiple-actions-mail_svg__cls-1"
      cx={16.5}
      cy={3.375}
      r={2.625}
    />,
    <path
      className="multiple-actions-mail_svg__cls-1"
      d="M11.452 11.245A6.051 6.051 0 00.75 14.25M21 11.25a4.484 4.484 0 00-8.037-2.75"
    />
  );

export default SvgMultipleActionsMail;
