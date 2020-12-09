import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleNeutralActionsQuestion = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-neutral-actions-question_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle
      className="single-neutral-actions-question_svg__cls-1"
      cx={17.5}
      cy={17.5}
      r={6}
    />,
    <path
      className="single-neutral-actions-question_svg__cls-1"
      d="M15.625 16.042a1.875 1.875 0 111.875 1.875v1M17.5 20.917a.25.25 0 11-.25.25.25.25 0 01.25-.25M9 16.5H.5a8.722 8.722 0 01.7-3.322c.49-.981 2.539-1.661 5.111-2.613.695-.258.581-2.073.273-2.412a5.131 5.131 0 01-1.34-3.979A3.354 3.354 0 018.5.5a3.354 3.354 0 013.256 3.674 5.131 5.131 0 01-1.336 3.979c-.308.339-.422 2.154.273 2.412.454.168.891.327 1.307.482"
    />
  );

export default SvgSingleNeutralActionsQuestion;
