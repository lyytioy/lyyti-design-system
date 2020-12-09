import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgProgrammingSearchBrowser = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".programming-search-browser_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="programming-search-browser_svg__a"
      d="M20.126 10.139L23.5 13.5"
    />,
    <circle
      className="programming-search-browser_svg__a"
      cx={16}
      cy={6.5}
      r={5.5}
    />,
    <path
      className="programming-search-browser_svg__a"
      d="M.5 10.999H10M20.5 13v8a2 2 0 01-2 2h-16a2 2 0 01-2-2V9a2 2 0 012-2h6"
    />,
    <path
      className="programming-search-browser_svg__a"
      d="M13.5 15l2 2-2 2M7.5 15l-2 2 2 2M11.5 15l-2 4"
    />
  );

export default SvgProgrammingSearchBrowser;
