import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAppWindowQuestion = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".app-window-question_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="app-window-question_svg__a"
      d="M21.76 8.253v-6a1.5 1.5 0 00-1.5-1.5h-18a1.5 1.5 0 00-1.5 1.5v16.5a1.5 1.5 0 001.5 1.5h6M.76 5.253h21"
    />,
    <circle
      className="app-window-question_svg__a"
      cx={17.26}
      cy={17.253}
      r={6}
    />,
    <path
      className="app-window-question_svg__a"
      d="M15.385 16.128A1.875 1.875 0 1117.26 18M17.26 20.253a.375.375 0 11-.375.375.375.375 0 01.375-.375"
    />
  );

export default SvgAppWindowQuestion;
