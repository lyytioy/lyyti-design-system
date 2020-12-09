import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCommonFileTextSearch = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".common-file-text-search_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="common-file-text-search_svg__a"
      d="M3.75 6.75h10.5M3.75 11.25H7.5M3.75 15.75H7.5M7.5 20.25H2.25a1.5 1.5 0 01-1.5-1.5V2.25a1.5 1.5 0 011.5-1.5h10.629a1.5 1.5 0 011.06.439l2.872 2.872a1.5 1.5 0 01.439 1.06V7.5"
    />,
    <circle
      className="common-file-text-search_svg__a"
      cx={15.764}
      cy={15.75}
      r={5.25}
    />,
    <path
      className="common-file-text-search_svg__a"
      d="M23.25 23.25l-3.773-3.788"
    />
  );

export default SvgCommonFileTextSearch;
