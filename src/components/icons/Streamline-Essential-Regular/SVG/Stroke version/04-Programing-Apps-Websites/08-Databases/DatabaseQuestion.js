import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDatabaseQuestion = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".database-question_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="database-question_svg__a"
      d="M12 9.751C5.787 9.751.75 7.736.75 5.251S5.787.751 12 .751s11.25 2.014 11.25 4.5c0 1.33-1.443 2.526-3.738 3.349M23.25 8.281v-3.03"
    />,
    <path
      className="database-question_svg__a"
      d="M.75 5.251v6c0 1.953 3.112 3.616 7.461 4.238"
    />,
    <path
      className="database-question_svg__a"
      d="M.75 11.251v6c0 2.176 3.863 3.992 9 4.409"
    />,
    <circle
      className="database-question_svg__a"
      cx={17.249}
      cy={17.251}
      r={6}
    />,
    <path
      className="database-question_svg__a"
      d="M15.374 16.126A1.875 1.875 0 1117.249 18M17.249 20.251a.375.375 0 10.375.375.374.374 0 00-.375-.375"
    />
  );

export default SvgDatabaseQuestion;
