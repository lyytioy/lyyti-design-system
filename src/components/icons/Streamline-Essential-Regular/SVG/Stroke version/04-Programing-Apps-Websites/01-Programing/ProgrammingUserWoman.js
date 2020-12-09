import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgProgrammingUserWoman = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".programming-user-woman_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="programming-user-woman_svg__a"
      d="M15 14.25h7.286a.965.965 0 00.964-.964V1.714a.965.965 0 00-.964-.964H12"
    />,
    <path
      className="programming-user-woman_svg__a"
      d="M12.75 4.5L15 6.75 12.75 9M18 6.75h2.25M9 23.25l.75-4.5h3L10.5 12c-.75-2.25-1.679-3.75-3.75-3.75S3.75 9.75 3 12L.75 18.75h3l.75 4.5z"
    />,
    <circle
      className="programming-user-woman_svg__a"
      cx={6.75}
      cy={3.75}
      r={3}
    />
  );

export default SvgProgrammingUserWoman;
