import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSendEmailEnvelope = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".send-email-envelope_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="send-email-envelope_svg__a"
      d="M21.4 17.2a1 1 0 01-.979.8H5.96a1 1 0 01-.979-1.2l2.083-10a1 1 0 01.979-.8H22.5a1 1 0 01.979 1.2z"
    />,
    <path
      className="send-email-envelope_svg__a"
      d="M7.427 6.212l5.117 5.511a2 2 0 002.613.277l8.095-5.666M.5 7h4M.5 10h3M.5 13h2"
    />
  );

export default SvgSendEmailEnvelope;
