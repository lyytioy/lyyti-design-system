import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgQuestionHelpSquare = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".question-help-square_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="question-help-square_svg__a"
      d="M9 9a3 3 0 114 2.829 1.5 1.5 0 00-1 1.415v.256M12 16.5a.375.375 0 10.375.375A.375.375 0 0012 16.5"
    />,
    <rect
      className="question-help-square_svg__a"
      x={0.75}
      y={0.75}
      width={22.5}
      height={22.5}
      rx={1.5}
      ry={1.5}
    />
  );

export default SvgQuestionHelpSquare;
