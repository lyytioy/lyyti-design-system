import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFileCodeQuestion = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".file-code-question_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle
      className="file-code-question_svg__a"
      cx={17.238}
      cy={17.254}
      r={6}
    />,
    <path
      className="file-code-question_svg__a"
      d="M15.363 16.129A1.875 1.875 0 1117.238 18M17.238 20.254a.375.375 0 11-.375.375.374.374 0 01.375-.375M8.238 20.254h-6a1.5 1.5 0 01-1.5-1.5v-16.5a1.5 1.5 0 011.5-1.5h10.628a1.5 1.5 0 011.061.439L16.8 4.064a1.5 1.5 0 01.44 1.061v3.129"
    />,
    <rect
      className="file-code-question_svg__a"
      x={6.738}
      y={5.254}
      width={3}
      height={4.5}
      rx={0.75}
      ry={0.75}
    />,
    <path
      className="file-code-question_svg__a"
      d="M3.738 5.254v4.5M12.738 5.254v4.5"
    />,
    <rect
      className="file-code-question_svg__a"
      x={3.738}
      y={12.754}
      width={3}
      height={4.5}
      rx={0.75}
      ry={0.75}
    />
  );

export default SvgFileCodeQuestion;
