import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFolderBookmark = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".folder-bookmark_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="folder-bookmark_svg__a"
      d="M21.75 9a1.5 1.5 0 011.45 1.886l-2.2 10.5a1.5 1.5 0 01-1.45 1.114H2.447"
    />,
    <path
      className="folder-bookmark_svg__a"
      d="M11.25 4.5h-3V3a1.5 1.5 0 00-1.5-1.5h-4.5A1.5 1.5 0 00.75 3v17.8a1.7 1.7 0 003.336.438l2.352-11.154A1.5 1.5 0 017.879 9H9.75M21.75 9V6a1.5 1.5 0 00-1.5-1.5M18.75 4.5h1.5M18.75 9h3M12.75 1.5a1.5 1.5 0 00-1.5 1.5v1.5h1.5v8.25l3-2.25 3 2.25V3a1.5 1.5 0 00-1.5-1.5z"
    />
  );

export default SvgFolderBookmark;
