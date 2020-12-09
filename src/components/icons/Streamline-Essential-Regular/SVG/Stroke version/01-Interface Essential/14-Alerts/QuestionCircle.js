import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgQuestionCircle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".question-circle_svg__a{fill:none;stroke:currentColor;stroke-width:1.5px;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="question-circle_svg__a"
      d="M9 9a3 3 0 114 2.829 1.5 1.5 0 00-1 1.415v1.006M12 17.25a.375.375 0 10.375.375.375.375 0 00-.375-.375"
    />,
    <circle
      cx={12}
      cy={12}
      r={11.25}
      strokeMiterlimit={10}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
    />
  );

export default SvgQuestionCircle;
