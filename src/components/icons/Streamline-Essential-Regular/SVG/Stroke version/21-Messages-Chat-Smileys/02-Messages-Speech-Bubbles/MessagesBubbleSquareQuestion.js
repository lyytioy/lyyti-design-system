import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMessagesBubbleSquareQuestion = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".messages-bubble-square-question_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="messages-bubble-square-question_svg__a"
      d="M21.75 18.75h-10.5l-6 4.5v-4.5h-3a1.5 1.5 0 01-1.5-1.5v-15a1.5 1.5 0 011.5-1.5h19.5a1.5 1.5 0 011.5 1.5v15a1.5 1.5 0 01-1.5 1.5z"
    />,
    <path
      className="messages-bubble-square-question_svg__a"
      d="M9.75 6.75a3 3 0 114 2.829 1.5 1.5 0 00-1 1.414v.257M12.75 14.25a.375.375 0 10.375.375.375.375 0 00-.375-.375"
    />
  );

export default SvgMessagesBubbleSquareQuestion;
