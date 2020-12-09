import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgConversationQuestionWarning = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".conversation-question-warning_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="conversation-question-warning_svg__a"
      d="M9.425 19.575L7.5 21.5v-4h-6a1 1 0 01-1-1v-15a1 1 0 011-1h18a1 1 0 011 1v7"
    />,
    <path
      className="conversation-question-warning_svg__a"
      d="M11.5 18.5a1 1 0 001 1h4l4 4v-4h2a1 1 0 001-1v-7a1 1 0 00-1-1h-10a1 1 0 00-1 1zM7.5 6a2 2 0 112.667 1.886 1 1 0 00-.667.943V9.5M9.5 11.5a.25.25 0 11-.25.25.25.25 0 01.25-.25"
    />,
    <path
      className="conversation-question-warning_svg__a"
      d="M17.5 16.5a.25.25 0 11-.25.25.25.25 0 01.25-.25M17.5 14.5v-2"
    />
  );

export default SvgConversationQuestionWarning;
