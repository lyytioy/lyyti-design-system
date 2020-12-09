import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAppWindowQuestion = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".app-window-question_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle
      className="app-window-question_svg__a"
      cx={17.5}
      cy={17.504}
      r={6}
    />,
    <path
      className="app-window-question_svg__a"
      d="M15.625 16.045A1.875 1.875 0 1117.5 17.92v1M17.5 20.92a.25.25 0 11-.25.25.25.25 0 01.25-.25M.5 4.504h20M3.5 2.254a.25.25 0 10.25.25.249.249 0 00-.25-.25M5.5 2.254a.25.25 0 10.25.25.249.249 0 00-.25-.25M7.5 2.254a.25.25 0 10.25.25.249.249 0 00-.25-.25"
    />,
    <path
      className="app-window-question_svg__a"
      d="M8.5 16.5h-6a2 2 0 01-2-2v-12a2 2 0 012-2h16a2 2 0 012 2v6"
    />
  );

export default SvgAppWindowQuestion;
