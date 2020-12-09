import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgQuestionHelpMessage = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".question-help-message_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="question-help-message_svg__a"
      d="M8.5 7.751a3.752 3.752 0 114.562 3.662 1.007 1.007 0 00-.812.975V13.5M12.25 16a.25.25 0 11-.25.25.25.25 0 01.25-.25"
    />,
    <path
      className="question-help-message_svg__a"
      d="M22.5 19.5H6L.9 23.212a.25.25 0 01-.4-.2V1.5a1 1 0 011-1h21a1 1 0 011 1v17a1 1 0 01-1 1z"
    />
  );

export default SvgQuestionHelpMessage;
