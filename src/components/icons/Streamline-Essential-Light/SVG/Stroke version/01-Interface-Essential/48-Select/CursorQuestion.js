import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCursorQuestion = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cursor-question_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="cursor-question_svg__a" cx={11} cy={13.998} r={8.5} />,
    <path
      className="cursor-question_svg__a"
      d="M15.405 3.242a.5.5 0 01.188-.932l6.278-.739a.5.5 0 01.555.555L21.7 8.34a.5.5 0 01-.934.184 12.778 12.778 0 00-5.361-5.282zM10.5 19a.25.25 0 10.25.25.25.25 0 00-.25-.25M7.5 12a3 3 0 114.2 2.75 2 2 0 00-1.2 1.834V17"
    />
  );

export default SvgCursorQuestion;
