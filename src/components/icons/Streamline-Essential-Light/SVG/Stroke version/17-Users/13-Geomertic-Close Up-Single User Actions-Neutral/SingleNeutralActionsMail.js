import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleNeutralActionsMail = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-neutral-actions-mail_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="single-neutral-actions-mail_svg__cls-1"
      d="M23.5 16v6.5a1 1 0 01-1 1h-10a1 1 0 01-1-1V16"
    />,
    <path
      className="single-neutral-actions-mail_svg__cls-1"
      d="M23.5 16v-.5a1 1 0 00-1-1h-10a1 1 0 00-1 1v.5l5.2 3.253a1.5 1.5 0 001.59 0z"
    />,
    <circle
      className="single-neutral-actions-mail_svg__cls-1"
      cx={7.5}
      cy={4.75}
      r={4.25}
    />,
    <path
      className="single-neutral-actions-mail_svg__cls-1"
      d="M8.5 17.5h-8a7 7 0 0110.783-5.89"
    />
  );

export default SvgSingleNeutralActionsMail;
