import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleNeutralQuestion = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-neutral-question_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle
      className="single-neutral-question_svg__cls-1"
      cx={17.5}
      cy={6.5}
      r={6}
    />,
    <path
      className="single-neutral-question_svg__cls-1"
      d="M15.625 5.042A1.875 1.875 0 1117.5 6.917v1M17.5 9.917a.25.25 0 11-.25.25.25.25 0 01.25-.25M7.5 23.5l.5-6h2.5V14a5 5 0 00-10 0v3.5H3l.5 6z"
    />,
    <circle
      className="single-neutral-question_svg__cls-1"
      cx={5.5}
      cy={4}
      r={3.5}
    />
  );

export default SvgSingleNeutralQuestion;
