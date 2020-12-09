import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgUserQuestion = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".user-question_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="user-question_svg__a"
      d="M15.5 23.25v-3.739l1.007.168A3 3 0 0020 16.719v-2.458l.935-.234a1.5 1.5 0 00.884-2.287L20 9.011v-.75C20 3.835 15.521.3 10.182.8A8.994 8.994 0 006.5 17.547v5.7"
    />,
    <path
      className="user-question_svg__a"
      d="M8.572 8.25a3 3 0 114 2.829 1.5 1.5 0 00-1 1.415v.256M11.572 15.75a.375.375 0 10.375.375.375.375 0 00-.375-.375"
    />
  );

export default SvgUserQuestion;
