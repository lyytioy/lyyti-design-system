import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFolderZip = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".folder-zip_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="folder-zip_svg__a"
      d="M21.75 9V6a1.5 1.5 0 00-1.5-1.5h-12V3a1.5 1.5 0 00-1.5-1.5h-4.5A1.5 1.5 0 00.75 3v17.8a1.7 1.7 0 003.336.438l2.351-11.154A1.5 1.5 0 017.879 9H21.75a1.5 1.5 0 011.45 1.886l-2.2 10.5a1.5 1.5 0 01-1.45 1.114H2.447M15.75 13.5v9M14.25 16.5h3M14.25 19.5h3"
    />,
    <path className="folder-zip_svg__a" d="M17.25 12a1.5 1.5 0 01-3 0V9h3z" />
  );

export default SvgFolderZip;
