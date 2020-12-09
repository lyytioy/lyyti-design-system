import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFolderImage1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".folder-image-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="folder-image-1_svg__a"
      d="M21.75 9V6a1.5 1.5 0 00-1.5-1.5h-12V3a1.5 1.5 0 00-1.5-1.5h-4.5A1.5 1.5 0 00.75 3v17.8a1.7 1.7 0 003.336.438l2.351-11.154A1.5 1.5 0 017.879 9H21.75a1.5 1.5 0 011.45 1.886l-2.2 10.5a1.5 1.5 0 01-1.45 1.114H2.447"
    />,
    <path
      className="folder-image-1_svg__a"
      d="M9.75 12.375a.375.375 0 11-.375.375.375.375 0 01.375-.375M18.379 19.5l-2.911-4.365a.75.75 0 00-1.238-.015l-2 2.851-1.23-.989a.75.75 0 00-1.092.17L8.34 19.5"
    />
  );

export default SvgFolderImage1;
