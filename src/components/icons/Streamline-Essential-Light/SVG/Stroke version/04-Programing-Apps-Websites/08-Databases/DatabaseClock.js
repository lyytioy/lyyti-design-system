import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDatabaseClock = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".database-clock_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <ellipse
      className="database-clock_svg__a"
      cx={10.042}
      cy={4.501}
      rx={9.5}
      ry={4}
    />,
    <path
      className="database-clock_svg__a"
      d="M10.042 12.5c-5.246 0-9.5-1.79-9.5-4M8.542 16.95c-4.533-.3-8-1.955-8-3.949"
    />,
    <path
      className="database-clock_svg__a"
      d="M9.042 21.48c-4.776-.211-8.5-1.912-8.5-3.979V4.5M19.542 4.501v4.5"
    />,
    <circle className="database-clock_svg__a" cx={17.537} cy={17.501} r={6} />,
    <path className="database-clock_svg__a" d="M19.537 17.501h-2v-3" />
  );

export default SvgDatabaseClock;
