import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgProgrammingSearch = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".programming-search_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle
      className="programming-search_svg__a"
      cx={10.5}
      cy={10.5}
      r={9}
      transform="rotate(-23.025 10.5 10.499)"
    />,
    <path
      className="programming-search_svg__a"
      d="M16.476 17.229L22.5 22.5M7.5 8.25L5.25 10.5l2.25 2.25M13.5 8.25l2.25 2.25-2.25 2.25M11.25 8.25l-1.5 4.5"
    />
  );

export default SvgProgrammingSearch;
