import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNotesQuestion = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".notes-question_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="notes-question_svg__a"
      d="M9.5 20.5h-8a1 1 0 01-1-1v-16a1 1 0 011-1h14a1 1 0 011 1v5M4.5 4.5v-4M8.5 4.5v-4M12.5 4.5v-4"
    />,
    <circle className="notes-question_svg__a" cx={17.5} cy={17.5} r={6} />,
    <path
      className="notes-question_svg__a"
      d="M15.625 16.042a1.875 1.875 0 111.875 1.875v1M17.5 20.917a.25.25 0 11-.25.25.25.25 0 01.25-.25"
    />
  );

export default SvgNotesQuestion;
