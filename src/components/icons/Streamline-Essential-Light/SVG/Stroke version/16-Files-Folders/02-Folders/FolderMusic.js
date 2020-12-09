import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFolderMusic = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".folder-music_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="folder-music_svg__a"
      d="M22 4.5H9a1 1 0 01-.72-.306L6.938 2.806a1 1 0 00-.72-.306H2.786A1.286 1.286 0 001.5 3.786V15.5"
    />,
    <rect
      className="folder-music_svg__a"
      x={4.5}
      y={7.5}
      width={18}
      height={14}
      rx={1}
      ry={1}
    />,
    <circle className="folder-music_svg__a" cx={17} cy={17} r={1.5} />,
    <circle className="folder-music_svg__a" cx={10} cy={18} r={1.5} />,
    <path
      className="folder-music_svg__a"
      d="M11.5 18v-5.746a1 1 0 01.725-.961l5-1.429a1 1 0 011.275.962V17"
    />
  );

export default SvgFolderMusic;
