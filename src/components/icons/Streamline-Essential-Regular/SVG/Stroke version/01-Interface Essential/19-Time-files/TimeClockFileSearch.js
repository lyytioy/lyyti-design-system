import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTimeClockFileSearch = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".time-clock-file-search_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="time-clock-file-search_svg__a"
      d="M6.734 13.982A4.5 4.5 0 1112 7.271M9.744 9.745H8.245V8.246"
    />,
    <path
      className="time-clock-file-search_svg__a"
      d="M8.995 20.238H2.249a1.5 1.5 0 01-1.5-1.5V2.249a1.5 1.5 0 011.5-1.5h10.622a1.5 1.5 0 011.06.439l2.87 2.87a1.5 1.5 0 01.439 1.06v1.629"
    />,
    <circle
      className="time-clock-file-search_svg__a"
      cx={15.755}
      cy={15.755}
      r={5.247}
    />,
    <path
      className="time-clock-file-search_svg__a"
      d="M23.25 23.25l-3.785-3.785"
    />
  );

export default SvgTimeClockFileSearch;
