import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCalendarSearch = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".calendar-search_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="calendar-search_svg__a"
      x={0.5}
      y={2.501}
      width={23}
      height={21}
      rx={1}
      ry={1}
    />,
    <path
      className="calendar-search_svg__a"
      d="M5.5.501v5M18.5.501v5M.5 7.501h23"
    />,
    <circle className="calendar-search_svg__a" cx={11.5} cy={14.501} r={4} />,
    <path className="calendar-search_svg__a" d="M14.328 17.329l3.172 3.172" />
  );

export default SvgCalendarSearch;
