import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMessagesBubbleQuestion = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".messages-bubble-question_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="messages-bubble-question_svg__a"
      d="M12.75.75a10.485 10.485 0 00-8.917 16.025L.75 23.25l6.474-3.084A10.5 10.5 0 1012.75.75zM12.75 15"
    />,
    <path
      className="messages-bubble-question_svg__a"
      d="M12.75 15a.375.375 0 10.375.375.375.375 0 00-.375-.375M9.75 9.75a3 3 0 113 3"
    />
  );

export default SvgMessagesBubbleQuestion;
