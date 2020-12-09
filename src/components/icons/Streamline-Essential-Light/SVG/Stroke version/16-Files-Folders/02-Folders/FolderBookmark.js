import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFolderBookmark = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".folder-bookmark_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="folder-bookmark_svg__a"
      d="M15.5 7a1 1 0 00-1 1v8.793a.5.5 0 00.854.353L17 15.5l1.646 1.646a.5.5 0 00.854-.353V8a1 1 0 00-1-1z"
    />,
    <path
      className="folder-bookmark_svg__a"
      d="M14.5 9h-4.3a1 1 0 01-.981-.8l-.278-1.4A1 1 0 007.96 6H1.5a1 1 0 00-.981 1.2l2.6 13a1 1 0 00.981.8H21a1 1 0 00.981-.8l1.5-10A1 1 0 0022.5 9h-3M2.5 4a1 1 0 011-1h18a1 1 0 011 1v3"
    />
  );

export default SvgFolderBookmark;
