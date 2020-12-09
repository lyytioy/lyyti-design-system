import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFolderLock1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".folder-lock-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="folder-lock-1_svg__a"
      d="M6 22.5H2.447M21.75 9V6a1.5 1.5 0 00-1.5-1.5h-12V3a1.5 1.5 0 00-1.5-1.5h-4.5A1.5 1.5 0 00.75 3v17.8a1.7 1.7 0 003.336.438l2.352-11.154A1.5 1.5 0 017.879 9H21.75a1.5 1.5 0 011.45 1.886l-2.2 10.5"
    />,
    <path
      className="folder-lock-1_svg__a"
      d="M13.5 19.125a.375.375 0 11-.375.375.375.375 0 01.375-.375"
    />,
    <rect
      className="folder-lock-1_svg__a"
      x={9.75}
      y={16.5}
      width={7.5}
      height={6}
      rx={0.25}
      ry={0.25}
    />,
    <path className="folder-lock-1_svg__a" d="M10.5 16.5V15a3 3 0 016 0v1.5" />
  );

export default SvgFolderLock1;
