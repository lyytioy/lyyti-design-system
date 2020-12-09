import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAnswerMachine = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".answer-machine_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="answer-machine_svg__a"
      x={3.5}
      y={3.5}
      width={7}
      height={20}
      rx={2}
      ry={2}
    />,
    <path
      className="answer-machine_svg__a"
      d="M10.5 6.5h12a1 1 0 011 1v13a1 1 0 01-1 1h-12M3.5 21.5h-2a1 1 0 01-1-1v-13a1 1 0 011-1h2"
    />,
    <path
      className="answer-machine_svg__a"
      d="M13.5 8.5h7v2h-7zM5.5 3.5v-3M13.749 13.5a.25.25 0 11-.25.25.25.25 0 01.25-.25M17 13.5a.25.25 0 11-.25.25.25.25 0 01.25-.25M13.749 16a.25.25 0 11-.25.25.25.25 0 01.25-.25M17 16a.25.25 0 11-.25.25A.25.25 0 0117 16M13.749 18.5a.25.25 0 11-.25.25.25.25 0 01.25-.25M20.251 13.5a.25.25 0 10.25.25.25.25 0 00-.25-.25M20.251 16a.25.25 0 10.25.25.25.25 0 00-.25-.25M20.251 18.5a.25.25 0 10.25.25.25.25 0 00-.25-.25M17 18.5a.25.25 0 11-.25.25.25.25 0 01.25-.25"
    />
  );

export default SvgAnswerMachine;
