import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCursorQuestion = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cursor-question_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="cursor-question_svg__a" cx={9.75} cy={14.247} r={9} />,
    <path
      className="cursor-question_svg__a"
      d="M23.25.747h-7.5l7.5 7.5v-7.5zM9.75 18.747a.375.375 0 10.375.375.375.375 0 00-.375-.375M6.75 11.247a3 3 0 114 2.83 1.5 1.5 0 00-1 1.414v.631"
    />
  );

export default SvgCursorQuestion;
