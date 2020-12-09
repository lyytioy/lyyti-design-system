import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgQuestionHelpSquare = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".question-help-square_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="question-help-square_svg__a"
      x={0.5}
      y={0.501}
      width={23}
      height={23}
      rx={2}
      ry={2}
    />,
    <path
      className="question-help-square_svg__a"
      d="M8.25 9.251a3.752 3.752 0 114.562 3.662 1.007 1.007 0 00-.812.975V15M12 17.5a.25.25 0 11-.25.25.25.25 0 01.25-.25"
    />
  );

export default SvgQuestionHelpSquare;
