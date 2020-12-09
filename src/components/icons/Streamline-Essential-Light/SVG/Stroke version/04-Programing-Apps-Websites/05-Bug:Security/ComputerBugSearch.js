import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgComputerBugSearch = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".computer-bug-search_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="computer-bug-search_svg__a"
      d="M17.583 17.559l5.956 5.956"
    />,
    <circle
      className="computer-bug-search_svg__a"
      cx={10.5}
      cy={10.5}
      r={10}
    />,
    <path
      className="computer-bug-search_svg__a"
      d="M13.539 13.515a3 3 0 01-6 0v-5h6zM13.539 8.515a3 3 0 10-6 0zM16.039 14.015a2.5 2.5 0 010-5M16.039 11.515h-2.5M5.039 14.015a2.5 2.5 0 000-5M5.039 11.515h2.5M13.539 4.015a2.993 2.993 0 01-1.016 2.25M8.555 6.265a2.991 2.991 0 01-1.016-2.25"
    />
  );

export default SvgComputerBugSearch;
