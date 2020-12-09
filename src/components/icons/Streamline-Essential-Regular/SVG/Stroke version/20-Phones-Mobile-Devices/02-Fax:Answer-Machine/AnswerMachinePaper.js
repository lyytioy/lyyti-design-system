import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAnswerMachinePaper = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".answer-machine-paper_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="answer-machine-paper_svg__a"
      x={3.75}
      y={3.75}
      width={7.5}
      height={19.5}
      rx={3}
      ry={3}
    />,
    <path
      className="answer-machine-paper_svg__a"
      d="M4.152 5.25h-.4a3 3 0 00-3 3v10.5a3 3 0 003 3h.4M10.848 21.75h9.4a3 3 0 003-3V8.25a3 3 0 00-3-3h-9.4M15 8.25h4.5M11.25 5.25v-3a1.5 1.5 0 011.5-1.5h5.379a1.5 1.5 0 011.06.44l.622.621a1.5 1.5 0 01.439 1.061V5.25M19.125 12.75"
    />,
    <path
      className="answer-machine-paper_svg__a"
      d="M19.125 12.75a.375.375 0 10.375.375.375.375 0 00-.375-.375M19.125 16.5a.375.375 0 10.375.375.375.375 0 00-.375-.375M15.375 12.75a.375.375 0 10.375.375.375.375 0 00-.375-.375M15.375 16.5a.375.375 0 10.375.375.375.375 0 00-.375-.375"
    />
  );

export default SvgAnswerMachinePaper;
