import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFolderFileLock = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".folder-file-lock_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="folder-file-lock_svg__a"
      d="M18.75 7.875a.375.375 0 11-.375.375.375.375 0 01.375-.375"
    />,
    <rect
      className="folder-file-lock_svg__a"
      x={14.25}
      y={5.25}
      width={9}
      height={6}
      rx={0.25}
      ry={0.25}
    />,
    <path
      className="folder-file-lock_svg__a"
      d="M15.75 5.25v-1.5a3 3 0 016 0v1.5M17.25 23.25a1.5 1.5 0 001.5-1.5v-6a1.5 1.5 0 00-1.5-1.5h-9v-1.5a1.5 1.5 0 00-1.5-1.5h-4.5a1.5 1.5 0 00-1.5 1.5v9a1.5 1.5 0 001.5 1.5zM23.25 14.25v4.5a1.5 1.5 0 01-1.5 1.5h-3M6.75 11.25v-9a1.5 1.5 0 011.5-1.5h4.5"
    />
  );

export default SvgFolderFileLock;
