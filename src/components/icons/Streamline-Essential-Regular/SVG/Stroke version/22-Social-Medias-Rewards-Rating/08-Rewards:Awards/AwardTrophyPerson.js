import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAwardTrophyPerson = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".award-trophy-person_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="award-trophy-person_svg__a"
      d="M19.5 13.964a11.963 11.963 0 003.75-8.714h-3M10.5 23.25h6.493a4.5 4.5 0 00-6.095-2.6"
    />,
    <path
      className="award-trophy-person_svg__a"
      d="M11.25.75h7.5a7.5 7.5 0 01-6 12v7.5"
    />,
    <circle className="award-trophy-person_svg__a" cx={5.25} cy={3.75} r={3} />,
    <path
      className="award-trophy-person_svg__a"
      d="M9.75 12.75a4.5 4.5 0 00-9 0v3h1.5l.75 7.5h4.5l.75-7.5h1.5z"
    />
  );

export default SvgAwardTrophyPerson;
