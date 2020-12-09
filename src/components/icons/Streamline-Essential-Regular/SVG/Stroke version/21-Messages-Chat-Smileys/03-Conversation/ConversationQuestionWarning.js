import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgConversationQuestionWarning = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".conversation-question-warning_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="conversation-question-warning_svg__a"
      d="M6.75 5.625A1.875 1.875 0 118.625 7.5M8.625 9.75a.375.375 0 10.375.375.375.375 0 00-.375-.375M17.25 2.25v4.5M15.75.75a1.5 1.5 0 011.5 1.5M2.25.75h13.5M.75 2.25a1.5 1.5 0 011.5-1.5M.75 12.75V2.25M2.25 14.25a1.5 1.5 0 01-1.5-1.5M5.25 14.25h-3M5.25 18.75v-4.5M8.25 16.5l-3 2.25M23.25 18.75h-3v4.5l-4.5-4.5h-4.5v-9h12v9zM17.25 12.75v3"
    />
  );

export default SvgConversationQuestionWarning;
