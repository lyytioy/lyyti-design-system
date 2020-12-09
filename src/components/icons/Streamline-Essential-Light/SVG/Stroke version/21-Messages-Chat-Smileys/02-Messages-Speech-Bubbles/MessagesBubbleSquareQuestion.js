import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMessagesBubbleSquareQuestion = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".messages-bubble-square-question_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="messages-bubble-square-question_svg__a"
      d="M23.5 17.5a1 1 0 01-1 1h-11l-4 4v-4h-6a1 1 0 01-1-1v-15a1 1 0 011-1h21a1 1 0 011 1z"
    />,
    <path
      className="messages-bubble-square-question_svg__a"
      d="M9.5 7.5a3 3 0 114.2 2.75 2 2 0 00-1.2 1.834v.416M12.5 14.75a.25.25 0 11-.25.25.25.25 0 01.25-.25"
    />
  );

export default SvgMessagesBubbleSquareQuestion;
