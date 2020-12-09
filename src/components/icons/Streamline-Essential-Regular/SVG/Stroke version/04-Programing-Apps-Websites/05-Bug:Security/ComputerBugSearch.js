import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgComputerBugSearch = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".computer-bug-search_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="computer-bug-search_svg__a"
      d="M10.5 2.283a8.9 8.9 0 013.824.507A9 9 0 113.347 15.56M17.226 17.979l6.024 5.271M3 6.75h6M3 6.75L.75 5.7M3 9H.75M3.267 10.983L1.5 12.75M9 6.75l2.25-1.05M9 9h2.25M8.733 10.983L10.5 12.75M5.095 3.14L3.9.75M6.905 3.141L8.1.75"
    />,
    <rect
      className="computer-bug-search_svg__a"
      x={3}
      y={3}
      width={6}
      height={9.75}
      rx={3}
      ry={3}
    />
  );

export default SvgComputerBugSearch;
