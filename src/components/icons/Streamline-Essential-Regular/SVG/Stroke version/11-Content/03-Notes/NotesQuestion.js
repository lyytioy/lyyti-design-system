import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNotesQuestion = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".notes-question_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="notes-question_svg__a" cx={17.25} cy={17.25} r={6} />,
    <path
      className="notes-question_svg__a"
      d="M15.375 16.125A1.875 1.875 0 1117.25 18M17.25 20.25a.375.375 0 11-.375.375.375.375 0 01.375-.375M8.25 20.25h-6a1.464 1.464 0 01-1.5-1.5V3.857a1.556 1.556 0 011.5-1.607h15a1.556 1.556 0 011.5 1.607V8.25M5.25.75v4.5M9.75.75v4.5M14.25.75v4.5"
    />
  );

export default SvgNotesQuestion;
