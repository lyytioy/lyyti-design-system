import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAwardTrophyPerson = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".award-trophy-person_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="award-trophy-person_svg__a"
      d="M20.893 18.96A2.549 2.549 0 0018.5 17h-5a2.547 2.547 0 00-2.391 1.961L10.5 22h11z"
    />,
    <path
      className="award-trophy-person_svg__a"
      d="M19.5 17.239V16.2a1 1 0 00-.575-.905A3.379 3.379 0 0117 12c0-3.386 3.744.716 3.988-8.974a1 1 0 00-1-1.025h-7.973a1 1 0 00-1 1.026C11.259 12.716 15 8.614 15 12a3.379 3.379 0 01-1.925 3.3 1 1 0 00-.575.9v1.039"
    />,
    <path
      className="award-trophy-person_svg__a"
      d="M11 3H8.5s0 4.728 3.218 4.989M21 3h2.5s0 4.729-3.219 4.989"
    />,
    <circle
      className="award-trophy-person_svg__a"
      cx={4}
      cy={6.749}
      r={2.75}
    />,
    <path
      className="award-trophy-person_svg__a"
      d="M7.5 14a3.5 3.5 0 00-7 0v3h1.583l.417 5h3l.417-5H7.5z"
    />
  );

export default SvgAwardTrophyPerson;
