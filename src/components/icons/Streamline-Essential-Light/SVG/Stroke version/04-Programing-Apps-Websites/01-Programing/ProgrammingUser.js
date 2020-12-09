import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgProgrammingUser = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".programming-user_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="programming-user_svg__a"
      d="M13 14.5h9.5a1 1 0 001-1v-12a1 1 0 00-1-1h-12M7.5 23.5l.5-6h2.5V14a5 5 0 00-10 0v3.5H3l.5 6z"
    />,
    <circle className="programming-user_svg__a" cx={5.5} cy={4} r={3.5} />,
    <path
      className="programming-user_svg__a"
      d="M12.5 4.5L15 7l-2.5 2.5M17.5 7.5h4"
    />
  );

export default SvgProgrammingUser;
