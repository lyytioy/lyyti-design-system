import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMultipleActionsQuestion = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".multiple-actions-question_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle
      className="multiple-actions-question_svg__cls-1"
      cx={18.5}
      cy={18.5}
      r={5}
    />,
    <path
      className="multiple-actions-question_svg__cls-1"
      d="M18.5 20.75a.25.25 0 11-.25.25.25.25 0 01.25-.25M17 17.5a1.5 1.5 0 111.5 1.5M.5 15.5a6 6 0 0112 0z"
    />,
    <circle
      className="multiple-actions-question_svg__cls-1"
      cx={6.5}
      cy={4.25}
      r={3.75}
    />,
    <circle
      className="multiple-actions-question_svg__cls-1"
      cx={16}
      cy={4.25}
      r={3.75}
    />,
    <path
      className="multiple-actions-question_svg__cls-1"
      d="M19.47 10.605a6 6 0 00-6.458-.309"
    />
  );

export default SvgMultipleActionsQuestion;
