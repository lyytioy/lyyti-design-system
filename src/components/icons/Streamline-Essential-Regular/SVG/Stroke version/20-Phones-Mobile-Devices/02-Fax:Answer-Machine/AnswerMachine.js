import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAnswerMachine = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".answer-machine_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="answer-machine_svg__a"
      x={3.75}
      y={2.25}
      width={7.5}
      height={19.5}
      rx={3}
      ry={3}
    />,
    <path
      className="answer-machine_svg__a"
      d="M4.15 20.25h-.4a3 3 0 01-3-3V6.75a3 3 0 013-3h.4M10.849 20.25h9.4a3 3 0 003-3V6.75a3 3 0 00-3-3h-9.4M15 6.75h4.5M19.125 11.25"
    />,
    <path
      className="answer-machine_svg__a"
      d="M19.125 11.25a.375.375 0 10.375.375.375.375 0 00-.375-.375M19.125 15a.375.375 0 10.375.375.375.375 0 00-.375-.375M15.375 11.25a.375.375 0 10.375.375.375.375 0 00-.375-.375M15.375 15a.375.375 0 10.375.375.375.375 0 00-.375-.375"
    />
  );

export default SvgAnswerMachine;
