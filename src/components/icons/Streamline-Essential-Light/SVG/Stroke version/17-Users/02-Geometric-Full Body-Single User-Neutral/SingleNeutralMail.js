import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleNeutralMail = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-neutral-mail_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="single-neutral-mail_svg__cls-1"
      d="M23.5 2v6.5a1 1 0 01-1 1h-10a1 1 0 01-1-1V2"
    />,
    <path
      className="single-neutral-mail_svg__cls-1"
      d="M23.5 2v-.5a1 1 0 00-1-1h-10a1 1 0 00-1 1V2l5.2 3.253a1.5 1.5 0 001.59 0zM7.5 23.5l.5-6h2.5V14a5 5 0 00-10 0v3.5H3l.5 6z"
    />,
    <circle
      className="single-neutral-mail_svg__cls-1"
      cx={5.5}
      cy={4}
      r={3.5}
    />
  );

export default SvgSingleNeutralMail;
