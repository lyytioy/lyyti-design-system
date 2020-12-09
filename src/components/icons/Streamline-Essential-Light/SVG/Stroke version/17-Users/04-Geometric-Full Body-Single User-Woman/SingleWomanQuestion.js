import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleWomanQuestion = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-woman-question_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle
      className="single-woman-question_svg__cls-1"
      cx={17.5}
      cy={6.5}
      r={6}
    />,
    <path
      className="single-woman-question_svg__cls-1"
      d="M15.625 5.042A1.875 1.875 0 1117.5 6.917v1M17.5 9.917a.25.25 0 11-.25.25.25.25 0 01.25-.25"
    />,
    <circle
      className="single-woman-question_svg__cls-1"
      cx={6}
      cy={4}
      r={3.5}
    />,
    <path
      className="single-woman-question_svg__cls-1"
      d="M2.547 4.577A4.633 4.633 0 006 2.974a4.632 4.632 0 003.452 1.6M8.217 9.715L6 13.206 3.802 9.701"
    />,
    <path
      className="single-woman-question_svg__cls-1"
      d="M6 9a3.8 3.8 0 013.7 2.918l1.8 6.582H8.543l-1.054 5h-3l-1.054-5H.5l1.805-6.582A3.8 3.8 0 016 9z"
    />
  );

export default SvgSingleWomanQuestion;
