import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFileCodeWarning = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".file-code-warning_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="file-code-warning_svg__a"
      d="M17.531 20.5a.25.25 0 11-.25.25.25.25 0 01.25-.25M17.531 18.504v-3"
    />,
    <path
      className="file-code-warning_svg__a"
      d="M18.369 12.507a.95.95 0 00-1.676 0l-5.056 9.634a.921.921 0 00.032.914.945.945 0 00.806.449h10.112a.946.946 0 00.807-.449.923.923 0 00.031-.914zM8.531 23.5h-7a1 1 0 01-1-1v-21a1 1 0 011-1h13.293a1 1 0 01.707.3l3.707 3.7a1 1 0 01.293.707V8.5M3.531 5.504v4M12.531 5.504v4M9.531 12.504v4M15.531 5.504v4"
    />,
    <path
      className="file-code-warning_svg__a"
      d="M8.031 5.5a1.5 1.5 0 011.5 1.5v1a1.5 1.5 0 11-3 0V7a1.5 1.5 0 011.5-1.5zM5.031 12.5a1.5 1.5 0 011.5 1.5v1a1.5 1.5 0 01-3 0v-1a1.5 1.5 0 011.5-1.5z"
    />
  );

export default SvgFileCodeWarning;
