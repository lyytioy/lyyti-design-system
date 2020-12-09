import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMusicClefSheet = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".music-clef-sheet_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="music-clef-sheet_svg__a"
      d="M.75 4.5h4.5M17.239 4.5h5.993M.75 9.75h2.988M15.738 9.778l7.512-.028M.75 15h2.238M16.488 15h6.751M.75 20.25L3 20.236M15 20.25h8.239M10.626 18.174a23.567 23.567 0 01.354 2.63 2.374 2.374 0 01-2.446 2.446 2.446 2.446 0 01-2.445-2.45"
    />,
    <path
      className="music-clef-sheet_svg__a"
      d="M9.313 15.521a1.982 1.982 0 011.667-3.032c1.081 0 1.957.978 1.957 2.446a3.424 3.424 0 01-6.848 0c0-2.7 2.036-4.248 4.891-5.381 3.473-1.378 3.424-8.8.978-8.8S9.024 5.152 9.024 7.6a44.151 44.151 0 00.7 5.348"
    />
  );

export default SvgMusicClefSheet;
