import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSendEmail = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".send-email_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="send-email_svg__a"
      d="M23.5 2L.931 11.323a.7.7 0 00.08 1.318L9.5 15z"
    />,
    <path
      className="send-email_svg__a"
      d="M23.5 2l-3.85 18.286a.9.9 0 01-1.376.562L9.5 15z"
    />,
    <path
      className="send-email_svg__a"
      d="M9.5 15v6.48a.519.519 0 00.967.261l2.561-4.39"
    />
  );

export default SvgSendEmail;
