import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgQuestionHelpCircle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".question-help-circle_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="question-help-circle_svg__a"
      d="M8.25 9.742a3.752 3.752 0 114.562 3.658 1.007 1.007 0 00-.812.975v1.113M12 17.992a.25.25 0 11-.25.25.25.25 0 01.25-.25"
    />,
    <circle
      className="question-help-circle_svg__a"
      cx={12}
      cy={12.001}
      r={11.5}
    />
  );

export default SvgQuestionHelpCircle;
