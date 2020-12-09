import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgModulePuzzle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".module-puzzle_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="module-puzzle_svg__a"
      d="M19.949 12a.49.49 0 01-.486-.386 2 2 0 00-3.926 0 .49.49 0 01-.486.386H13v2.051a.49.49 0 00.386.486 2 2 0 010 3.926.49.49 0 00-.386.486V21h8a1 1 0 001-1v-8z"
    />,
    <path
      className="module-puzzle_svg__a"
      d="M19.949 3a.49.49 0 00-.486.386 2 2 0 01-3.926 0A.49.49 0 0015.051 3H13v2.051a.49.49 0 01-.386.486 2 2 0 000 3.926.49.49 0 01.386.486V12h2.051a.49.49 0 00.486-.386 2 2 0 013.926 0 .49.49 0 00.486.386H22V4a1 1 0 00-1-1z"
    />,
    <path
      className="module-puzzle_svg__a"
      d="M4 5.051a.49.49 0 00.386.486 2 2 0 010 3.926.49.49 0 00-.386.486V12h2.051a.49.49 0 01.486.386 2 2 0 003.926 0 .49.49 0 01.486-.386H13V9.949a.49.49 0 00-.386-.486 2 2 0 010-3.926.49.49 0 00.386-.486V3H5a1 1 0 00-1 1z"
    />,
    <path
      className="module-puzzle_svg__a"
      d="M13.386 14.537a.49.49 0 01-.386-.486V12h-2.051a.49.49 0 00-.486.386 2 2 0 01-3.926 0A.49.49 0 006.051 12H4v2.051a.49.49 0 01-.386.486 2 2 0 000 3.926.49.49 0 01.386.486V20a1 1 0 001 1h8v-2.051a.49.49 0 01.386-.486 2 2 0 000-3.926z"
    />
  );

export default SvgModulePuzzle;
