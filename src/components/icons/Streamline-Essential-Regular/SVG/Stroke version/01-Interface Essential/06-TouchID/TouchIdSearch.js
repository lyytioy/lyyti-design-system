import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTouchIdSearch = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".touch-id-search_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="touch-id-search_svg__a"
      d="M12 1.753A7.5 7.5 0 00.75 8.25M15.75 8.25a7.478 7.478 0 00-.624-3M8.25 23.25a7.563 7.563 0 001.5-.15M.75 12.75v3a7.5 7.5 0 004.5 6.876M12.75 8.25A4.5 4.5 0 006 4.352M3.75 8.25v7.5a4.5 4.5 0 004.5 4.5M9.75 9.75v-1.5a1.5 1.5 0 00-3 0v3M6.75 15.75a1.5 1.5 0 001.5 1.5"
    />,
    <circle
      className="touch-id-search_svg__a"
      cx={15.75}
      cy={15.75}
      r={5.25}
    />,
    <path className="touch-id-search_svg__a" d="M23.25 23.25l-3.788-3.788" />
  );

export default SvgTouchIdSearch;
