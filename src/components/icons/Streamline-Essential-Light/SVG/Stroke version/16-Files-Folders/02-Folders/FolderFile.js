import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFolderFile = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".folder-file_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path className="folder-file_svg__a" d="M17 .58V4.5a1 1 0 001 1h3.92" />,
    <path
      className="folder-file_svg__a"
      d="M5 12.5v-11a1 1 0 011-1h10.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V20.5a1 1 0 01-1 1h-5M8 5.5h6.5M8 5.5h6.5M8 8.5h7.5M8 11.5h10.5"
    />,
    <path
      className="folder-file_svg__a"
      d="M15 14.5H8a1 1 0 01-.8-.4l-.9-1.2a1 1 0 00-.8-.4H3a1 1 0 00-1 1v9a1 1 0 001 1h12a1 1 0 001-1v-7a1 1 0 00-1-1z"
    />
  );

export default SvgFolderFile;
