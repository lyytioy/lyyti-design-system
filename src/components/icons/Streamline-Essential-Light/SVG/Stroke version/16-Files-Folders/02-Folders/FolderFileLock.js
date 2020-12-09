import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFolderFileLock = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".folder-file-lock_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="folder-file-lock_svg__a"
      d="M21 14.5v6a1 1 0 01-1 1h-5M4 12.5v-11a1 1 0 011-1h8M14 14.5H7a1 1 0 01-.8-.4l-.9-1.2a1 1 0 00-.8-.4H2a1 1 0 00-1 1v9a1 1 0 001 1h12a1 1 0 001-1v-7a1 1 0 00-1-1z"
    />,
    <rect
      className="folder-file-lock_svg__a"
      x={14}
      y={4.5}
      width={9}
      height={7}
      rx={1}
      ry={1}
    />,
    <path
      className="folder-file-lock_svg__a"
      d="M18.5 7a1 1 0 101 1 1 1 0 00-1-1zM16 4.5V3a2.5 2.5 0 015 0v1.5"
    />
  );

export default SvgFolderFileLock;
