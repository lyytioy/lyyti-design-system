import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFlagQuestion = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".flag-question_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="flag-question_svg__a"
      d="M.5 23.5V.5M.5 19.5a21.794 21.794 0 016-1c3 0 7.5 2 10.5 2a18.515 18.515 0 005.849-1.244 1 1 0 00.651-.938V4.44a1 1 0 00-1.321-.947A17.367 17.367 0 0117 4.5c-3 0-7.5-2-10.5-2a21.794 21.794 0 00-6 1zM12.602 15.5"
    />,
    <path
      className="flag-question_svg__a"
      d="M12.6 15.5a.25.25 0 10.25.249.25.25 0 00-.25-.249M9.909 9.59a2.591 2.591 0 113.627 2.375 1.729 1.729 0 00-1.036 1.583v.359"
    />
  );

export default SvgFlagQuestion;
