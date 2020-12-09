import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleNeutralMail = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-neutral-mail_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle
      className="single-neutral-mail_svg__cls-1"
      cx={5.25}
      cy={3.75}
      r={3}
    />,
    <path
      className="single-neutral-mail_svg__cls-1"
      d="M7.5 23.25l.75-7.5h1.5v-3a4.5 4.5 0 00-9 0v3h1.5l.75 7.5zM23.25 2.25v6a1.5 1.5 0 01-1.5 1.5h-9a1.5 1.5 0 01-1.5-1.5v-6"
    />,
    <path
      className="single-neutral-mail_svg__cls-1"
      d="M23.25 2.25a1.5 1.5 0 00-1.5-1.5h-9a1.5 1.5 0 00-1.5 1.5l5.2 3.253a1.5 1.5 0 001.59 0z"
    />
  );

export default SvgSingleNeutralMail;
