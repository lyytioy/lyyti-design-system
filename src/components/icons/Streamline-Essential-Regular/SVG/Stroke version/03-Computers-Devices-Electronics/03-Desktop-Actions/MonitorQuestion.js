import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMonitorQuestion = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".monitor-question_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="monitor-question_svg__a"
      d="M8.25 20.25l.75-4.5M6 20.25h2.25M.75 12.68h8.383M9 15.75H3.75a3 3 0 01-3-3v-9a3 3 0 013-3h16.5a3 3 0 013 3v7.5"
    />,
    <circle className="monitor-question_svg__a" cx={17.25} cy={17.25} r={6} />,
    <path
      className="monitor-question_svg__a"
      d="M15.375 16.125A1.875 1.875 0 1117.25 18M17.25 20.25a.375.375 0 11-.375.375.375.375 0 01.375-.375"
    />
  );

export default SvgMonitorQuestion;
