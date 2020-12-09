import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSendEmail = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".send-email_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="send-email_svg__a"
      d="M2.759 15.629a1.664 1.664 0 01-.882-3.075L20.36 1a1.663 1.663 0 012.516 1.72l-3.6 19.173a1.664 1.664 0 01-2.966.691l-5.21-6.955z"
    />,
    <path
      className="send-email_svg__a"
      d="M11.1 15.629H8.6V20.8a1.663 1.663 0 002.6 1.374l3.178-2.166zM11.099 15.629l11.08-14.59"
    />
  );

export default SvgSendEmail;
