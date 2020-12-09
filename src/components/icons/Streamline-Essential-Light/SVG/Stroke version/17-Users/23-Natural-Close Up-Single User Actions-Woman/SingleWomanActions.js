import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleWomanActions = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-woman-actions_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="single-woman-actions_svg__cls-1"
      d="M14 13.479a5.633 5.633 0 003.515-.762.5.5 0 00.132-.743c-.422-.5-.714-1.155-.843-3.06C16.558 5.279 14.106 4 12 4S7.442 5.279 7.2 8.914c-.129 1.905-.421 2.563-.843 3.059a.5.5 0 00.132.744 5.633 5.633 0 003.511.762"
    />,
    <path
      className="single-woman-actions_svg__cls-1"
      d="M15 8.5a4.991 4.991 0 01-3-1.737A4.991 4.991 0 019 8.5v2a2.124 2.124 0 00.775 1.8.694.694 0 01.225.515v1.35a.739.739 0 01-.482.687c-2.742 1.015-4.757 1.739-5.279 2.783A7.11 7.11 0 003.5 20.5h17a7.11 7.11 0 00-.739-2.868c-.522-1.044-2.537-1.768-5.279-2.783a.739.739 0 01-.482-.687v-1.35a.694.694 0 01.225-.515A2.124 2.124 0 0015 10.5z"
    />
  );

export default SvgSingleWomanActions;
