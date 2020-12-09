import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleNeutralQuestion = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-neutral-question_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle
      className="single-neutral-question_svg__cls-1"
      cx={5.25}
      cy={3.75}
      r={3}
    />,
    <path
      className="single-neutral-question_svg__cls-1"
      d="M7.5 23.25l.75-7.5h1.5v-3a4.5 4.5 0 00-9 0v3h1.5l.75 7.5z"
    />,
    <circle
      className="single-neutral-question_svg__cls-1"
      cx={17.25}
      cy={6.75}
      r={6}
    />,
    <path
      className="single-neutral-question_svg__cls-1"
      d="M15.375 5.625A1.875 1.875 0 1117.25 7.5M17.25 9.75a.375.375 0 10.375.375.375.375 0 00-.375-.375"
    />
  );

export default SvgSingleNeutralQuestion;
