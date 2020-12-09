import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFolderWarning = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".folder-warning_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="folder-warning_svg__a"
      d="M20.5 9.5v-5a1 1 0 00-1-1H9.618a1 1 0 01-.894-.553l-.948-1.894A1 1 0 006.882.5H1.5a1 1 0 00-1 1v15a1 1 0 001 1h8M17.5 20.5a.25.25 0 11-.25.25.25.25 0 01.25-.25M17.5 18.5v-3"
    />,
    <path
      className="folder-warning_svg__a"
      d="M18.338 12.5a.95.95 0 00-1.676 0l-5.056 9.635a.923.923 0 00.031.914.948.948 0 00.807.448h10.112a.948.948 0 00.807-.448.923.923 0 00.031-.914z"
    />
  );

export default SvgFolderWarning;
