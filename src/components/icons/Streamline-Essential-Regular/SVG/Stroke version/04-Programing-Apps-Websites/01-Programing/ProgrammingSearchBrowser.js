import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgProgrammingSearchBrowser = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".programming-search-browser_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle
      className="programming-search-browser_svg__a"
      cx={15.75}
      cy={6}
      r={5.25}
    />,
    <path
      className="programming-search-browser_svg__a"
      d="M23.25 13.5l-3.788-3.788M6.75 3.75h-4.5a1.5 1.5 0 00-1.5 1.5v16.5a1.5 1.5 0 001.5 1.5h18a1.5 1.5 0 001.5-1.5v-4.5M.75 8.25H7.5"
    />,
    <path
      className="programming-search-browser_svg__a"
      d="M8.25 14.25L6 16.5l2.25 2.25M14.25 14.25l2.25 2.25-2.25 2.25M12 14.25l-1.5 4.5"
    />
  );

export default SvgProgrammingSearchBrowser;
