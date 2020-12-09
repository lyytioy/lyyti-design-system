import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleWomanActionsQuestion = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-woman-actions-question_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle
      className="single-woman-actions-question_svg__cls-1"
      cx={17.25}
      cy={17.25}
      r={6}
    />,
    <path
      className="single-woman-actions-question_svg__cls-1"
      d="M15.375 16.125A1.875 1.875 0 1117.25 18M17.25 20.25a.375.375 0 10.375.375.374.374 0 00-.375-.375"
    />,
    <circle
      className="single-woman-actions-question_svg__cls-1"
      cx={6}
      cy={3.75}
      r={3}
    />,
    <path
      className="single-woman-actions-question_svg__cls-1"
      d="M10.567 10.91a5.286 5.286 0 00-1.681-1.8L6 13.5 3.114 9.114A5.246 5.246 0 00.75 13.5v2.25H3l.75 7.5h4.5l.357-3.573M3 3.75S3 7.5.75 7.5M9 3.75S9 7.5 11.25 7.5"
    />
  );

export default SvgSingleWomanActionsQuestion;
