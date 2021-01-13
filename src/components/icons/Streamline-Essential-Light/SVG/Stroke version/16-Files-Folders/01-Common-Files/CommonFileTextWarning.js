import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCommonFileTextWarning = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".common-file-text-warning_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="common-file-text-warning_svg__a"
      d="M4.5 8.5H14M4.5 11.5H14M4.5 5.5h7M4.5 14.5h7M4.5 17.5H9M8.5 23.5h-7a1 1 0 01-1-1v-21a1 1 0 011-1h13.293a1 1 0 01.707.293L19.207 4.5a1 1 0 01.293.707V8.5M17.5 20.5a.25.25 0 11-.25.25.25.25 0 01.25-.25M17.5 18.5v-3"
    />,
    <path
      className="common-file-text-warning_svg__a"
      d="M18.338 12.5a.95.95 0 00-1.676 0l-5.056 9.635a.923.923 0 00.031.914.948.948 0 00.807.448h10.112a.948.948 0 00.807-.448.923.923 0 00.031-.914z"
    />
  );

export default SvgCommonFileTextWarning;