import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCalendarSearch1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".calendar-search-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path className="calendar-search-1_svg__a" d="M23.5 23.501l-3.578-3.578" />,
    <circle className="calendar-search-1_svg__a" cx={17} cy={16.501} r={4.5} />,
    <path
      className="calendar-search-1_svg__a"
      d="M9.5 18.5h-8a1 1 0 01-1-1v-14a1 1 0 011-1h18a1 1 0 011 1V10M5.5.501v5M15.5.501v5M.5 7.501h20"
    />
  );

export default SvgCalendarSearch1;
