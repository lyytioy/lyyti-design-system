import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFolderSearch1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".folder-search-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="folder-search-1_svg__a"
      d="M21.75 9V6a1.5 1.5 0 00-1.5-1.5h-12V3a1.5 1.5 0 00-1.5-1.5h-4.5A1.5 1.5 0 00.75 3v17.8a1.7 1.7 0 003.336.438l2.352-11.154A1.5 1.5 0 017.879 9H21.75a1.5 1.5 0 011.45 1.886l-2.2 10.5a1.5 1.5 0 01-1.45 1.114H2.447"
    />,
    <circle
      className="folder-search-1_svg__a"
      cx={12.875}
      cy={15.125}
      r={3.125}
    />,
    <path className="folder-search-1_svg__a" d="M15.085 17.335L17.25 19.5" />
  );

export default SvgFolderSearch1;