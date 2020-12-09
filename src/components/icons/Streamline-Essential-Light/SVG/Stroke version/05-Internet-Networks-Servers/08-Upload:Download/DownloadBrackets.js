import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDownloadBrackets = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".download-brackets_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="download-brackets_svg__a"
      d="M11.5 19.5V5M17 14l-5.5 5.5L6 14M17.5.5h5a1 1 0 011 1v21a1 1 0 01-1 1h-5"
    />,
    <path
      className="download-brackets_svg__a"
      d="M6.5.5h-5a1 1 0 00-1 1v21a1 1 0 001 1h5"
    />
  );

export default SvgDownloadBrackets;
