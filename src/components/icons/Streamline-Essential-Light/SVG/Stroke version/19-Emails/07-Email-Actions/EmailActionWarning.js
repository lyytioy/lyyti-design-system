import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgEmailActionWarning = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".email-action-warning_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="email-action-warning_svg__a"
      d="M17.5 20.5a.25.25 0 11-.25.25.25.25 0 01.25-.25M17.5 18.5v-3"
    />,
    <path
      className="email-action-warning_svg__a"
      d="M18.338 12.5a.95.95 0 00-1.676 0l-5.056 9.635a.923.923 0 00.031.914.948.948 0 00.807.448h10.112a.948.948 0 00.807-.448.923.923 0 00.031-.914z"
    />,
    <path
      className="email-action-warning_svg__a"
      d="M11.5 14.5H2A1.5 1.5 0 01.5 13V2A1.5 1.5 0 012 .5h18A1.5 1.5 0 0121.5 2v8.5"
    />,
    <path
      className="email-action-warning_svg__a"
      d="M21.067.946L11 9 .933.946"
    />
  );

export default SvgEmailActionWarning;
