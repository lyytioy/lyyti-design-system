import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgQuestionCircle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".question-circle_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="question-circle_svg__a" cx={12} cy={12.001} r={11} />,
    <path
      className="question-circle_svg__a"
      d="M12 17a.25.25 0 10.25.25A.25.25 0 0012 17M9 10.005a3 3 0 114.2 2.75 2 2 0 00-1.2 1.833V15"
    />
  );

export default SvgQuestionCircle;
