import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleManQuestion = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-man-question_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle
      className="single-man-question_svg__cls-1"
      cx={17.5}
      cy={6.5}
      r={6}
    />,
    <path
      className="single-man-question_svg__cls-1"
      d="M15.625 5.042A1.875 1.875 0 1117.5 6.917v1M17.5 9.917a.25.25 0 11-.25.25.25.25 0 01.25-.25M5.5 11v3M7.5 23.5l.5-6h2.5V14a5 5 0 00-10 0v3.5H3l.5 6zM2.484 2.223A5.809 5.809 0 006.667 4a5.822 5.822 0 002.3-.473"
    />,
    <circle
      className="single-man-question_svg__cls-1"
      cx={5.5}
      cy={4}
      r={3.5}
    />
  );

export default SvgSingleManQuestion;
