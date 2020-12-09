import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgProgrammingSearch = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".programming-search_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="programming-search_svg__a"
      d="M17.583 17.545l5.956 5.955"
    />,
    <circle
      className="programming-search_svg__a"
      cx={10.5}
      cy={10.485}
      r={10}
    />,
    <path
      className="programming-search_svg__a"
      d="M14 7.5l3 3-3 3M7 7.5l-3 3 3 3M12 6.5l-3 8"
    />
  );

export default SvgProgrammingSearch;
