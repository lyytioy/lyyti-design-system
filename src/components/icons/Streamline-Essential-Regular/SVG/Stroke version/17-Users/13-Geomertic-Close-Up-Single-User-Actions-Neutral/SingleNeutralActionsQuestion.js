import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleNeutralActionsQuestion = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-neutral-actions-question_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="single-neutral-actions-question_svg__cls-1"
      d="M.75 17.25a6.753 6.753 0 019.4-6.208"
    />,
    <circle
      className="single-neutral-actions-question_svg__cls-1"
      cx={7.5}
      cy={4.875}
      r={4.125}
    />,
    <circle
      className="single-neutral-actions-question_svg__cls-1"
      cx={17.25}
      cy={17.25}
      r={6}
    />,
    <path
      className="single-neutral-actions-question_svg__cls-1"
      d="M15.375 16.125A1.875 1.875 0 1117.25 18M17.25 20.25a.375.375 0 10.375.375.374.374 0 00-.375-.375"
    />
  );

export default SvgSingleNeutralActionsQuestion;
