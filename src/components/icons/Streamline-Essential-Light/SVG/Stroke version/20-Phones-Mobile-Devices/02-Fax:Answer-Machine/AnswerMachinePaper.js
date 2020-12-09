import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAnswerMachinePaper = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".answer-machine-paper_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="answer-machine-paper_svg__a"
      x={2.501}
      y={3.5}
      width={7}
      height={20}
      rx={2}
      ry={2}
    />,
    <path
      className="answer-machine-paper_svg__a"
      d="M9.5 6.5h13a1 1 0 011 1v13a1 1 0 01-1 1h-13M2.5 21.5h-1a1 1 0 01-1-1v-13a1 1 0 011-1h1"
    />,
    <path
      className="answer-machine-paper_svg__a"
      d="M12.501 8.5H20.5v2h-7.999zM4.501 3.5v-3M13.25 13a.25.25 0 11-.25.25.25.25 0 01.25-.25M16.5 13a.25.25 0 11-.25.25.25.25 0 01.25-.25M13.25 15.75A.25.25 0 1113 16a.25.25 0 01.25-.25M16.5 15.75a.25.25 0 11-.25.25.25.25 0 01.25-.25M13.25 18.5a.25.25 0 11-.25.25.25.25 0 01.25-.25M19.75 13a.25.25 0 10.25.25.25.25 0 00-.25-.25M19.75 15.75A.25.25 0 1020 16a.25.25 0 00-.25-.25M19.75 18.5a.25.25 0 10.25.25.25.25 0 00-.25-.25M16.5 18.5a.25.25 0 11-.25.25.25.25 0 01.25-.25M11.5 4.5v-3a1 1 0 011-1h6.149a1 1 0 01.625.219L21.125 2.2a1 1 0 01.375.781V4.5M13.498 2.5h3.5M13.498 4.5h6"
    />
  );

export default SvgAnswerMachinePaper;
