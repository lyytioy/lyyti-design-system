import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCalendarSearch1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".calendar-search-1_svg__a{fill:none;stroke:currentColor;stroke-linejoin:round;stroke-width:1.5px;stroke-linecap:round}"
        }
      </style>
    </defs>,
    <path
      className="calendar-search-1_svg__a"
      d="M7.479 17.226H2.25a1.5 1.5 0 01-1.5-1.5V3.748a1.5 1.5 0 011.5-1.5h13.5a1.5 1.5 0 011.5 1.5v3.734"
    />,
    <path
      fill="none"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M.757 6.747h16.5"
    />,
    <path
      className="calendar-search-1_svg__a"
      d="M5.25 3.748V.75M12.75 3.748V.75"
    />,
    <circle
      className="calendar-search-1_svg__a"
      cx={15.75}
      cy={15.755}
      r={5.25}
    />,
    <path className="calendar-search-1_svg__a" d="M23.25 23.25l-3.788-3.785" />
  );

export default SvgCalendarSearch1;
