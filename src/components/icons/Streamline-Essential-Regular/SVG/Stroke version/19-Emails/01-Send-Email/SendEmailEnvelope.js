import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSendEmailEnvelope = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".send-email-envelope_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="send-email-envelope_svg__a"
      d="M21.23 16.776A1.5 1.5 0 0119.755 18H2.558a1.5 1.5 0 01-1.475-1.776l1.688-9A1.5 1.5 0 014.245 6h17.2a1.5 1.5 0 011.474 1.776z"
    />,
    <path
      className="send-email-envelope_svg__a"
      d="M22.917 7.776L12 12 2.771 7.224"
    />
  );

export default SvgSendEmailEnvelope;
