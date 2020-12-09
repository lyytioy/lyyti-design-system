import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDatabaseClock = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".database-clock_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="database-clock_svg__a" cx={17.25} cy={17.251} r={6} />,
    <path
      className="database-clock_svg__a"
      d="M19.902 17.251H17.25v-2.652M19.611 8.564c2.237-.822 3.639-2 3.639-3.313 0-2.486-5.037-4.5-11.25-4.5S.75 2.765.75 5.251s5.037 4.5 11.25 4.5M.75 11.251c0 1.984 3.211 3.668 7.667 4.266"
    />,
    <path
      className="database-clock_svg__a"
      d="M.75 5.251v12c0 2.125 3.683 3.906 8.635 4.377M23.25 10.543V5.251"
    />,
    <path
      className="database-clock_svg__a"
      d="M19.611 8.564c2.237-.822 3.639-2 3.639-3.313 0-2.486-5.037-4.5-11.25-4.5S.75 2.765.75 5.251s5.037 4.5 11.25 4.5M.75 11.251c0 1.984 3.211 3.668 7.667 4.266"
    />,
    <path
      className="database-clock_svg__a"
      d="M.75 5.251v12c0 2.125 3.683 3.906 8.635 4.377M23.25 10.543V5.251"
    />
  );

export default SvgDatabaseClock;
