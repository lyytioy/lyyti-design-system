import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleWomanMail = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-woman-mail_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="single-woman-mail_svg__cls-1"
      d="M23.25 2.25v6a1.5 1.5 0 01-1.5 1.5h-9a1.5 1.5 0 01-1.5-1.5v-6"
    />,
    <path
      className="single-woman-mail_svg__cls-1"
      d="M23.25 2.25a1.5 1.5 0 00-1.5-1.5h-9a1.5 1.5 0 00-1.5 1.5l5.2 3.253a1.5 1.5 0 001.59 0z"
    />,
    <circle
      className="single-woman-mail_svg__cls-1"
      cx={5.25}
      cy={3.75}
      r={3}
    />,
    <path
      className="single-woman-mail_svg__cls-1"
      d="M8.034 9.216L5.25 12.75 2.466 9.216A4.489 4.489 0 00.75 12.75v3h1.5l.75 7.5h4.5l.75-7.5h1.5v-3a4.489 4.489 0 00-1.716-3.534zM2.25 3.75s0 3-1.5 3"
    />
  );

export default SvgSingleWomanMail;
