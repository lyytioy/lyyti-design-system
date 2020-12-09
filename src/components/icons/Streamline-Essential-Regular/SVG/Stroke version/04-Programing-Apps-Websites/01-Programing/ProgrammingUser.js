import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgProgrammingUser = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".programming-user_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="programming-user_svg__a"
      d="M15 14.25h7.286a.965.965 0 00.964-.964V1.714a.965.965 0 00-.964-.964H12"
    />,
    <path
      className="programming-user_svg__a"
      d="M12.75 4.5L15 6.75 12.75 9M18 6.75h2.25"
    />,
    <circle className="programming-user_svg__a" cx={6} cy={3.75} r={3} />,
    <path
      className="programming-user_svg__a"
      d="M11.25 13.5a5.25 5.25 0 00-10.5 0v2.25H3l.75 7.5h4.5l.75-7.5h2.25z"
    />
  );

export default SvgProgrammingUser;
