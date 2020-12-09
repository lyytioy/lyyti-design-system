import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMessagesBubbleQuestion = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".messages-bubble-question_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="messages-bubble-question_svg__a"
      d="M12.056 1C5.7 1 .556 5.253.556 10.5a8.737 8.737 0 003.4 6.741L1.556 23l6.372-3.641a13.6 13.6 0 004.128.641c6.351 0 11.5-4.253 11.5-9.5S18.407 1 12.056 1z"
    />,
    <path
      className="messages-bubble-question_svg__a"
      d="M9.056 8a3 3 0 114.2 2.751 2 2 0 00-1.2 1.833V13M12.056 15.25a.25.25 0 11-.25.25.25.25 0 01.25-.25"
    />
  );

export default SvgMessagesBubbleQuestion;
