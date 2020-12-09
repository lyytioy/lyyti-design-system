import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMusicClefSheet = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".music-clef-sheet_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="music-clef-sheet_svg__a"
      d="M6.5 20.5v1a2 2 0 004 0v-19a2 2 0 014 0 3.2 3.2 0 01-1.152 2.46L6.97 10.275A4.086 4.086 0 009.586 17.5H10a3.5 3.5 0 003.5-3.5 2.5 2.5 0 00-5 0"
    />,
    <circle className="music-clef-sheet_svg__a" cx={7.5} cy={20.5} r={1} />,
    <path
      className="music-clef-sheet_svg__a"
      d="M.5 4.5h8M16.5 4.5h7M.5 9.5H4M15.5 9.5h8M.5 14.5H3M15.5 14.5h8M.5 19.5h4M13.5 19.5h10"
    />
  );

export default SvgMusicClefSheet;
