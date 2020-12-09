import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgProgrammingUser1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".programming-user-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="programming-user-1_svg__a" cx={5.25} cy={3.75} r={3} />,
    <path
      className="programming-user-1_svg__a"
      d="M5.25 8.25v6M7.5 23.25l.75-7.5h1.5v-3a4.5 4.5 0 00-9 0v3h1.5l.75 7.5zM12.75 14.25h9.536a.965.965 0 00.964-.964V1.714a.965.965 0 00-.964-.964H10.5"
    />,
    <path
      className="programming-user-1_svg__a"
      d="M12.75 4.5L15 6.75 12.75 9M18 6.75h2.25"
    />
  );

export default SvgProgrammingUser1;
