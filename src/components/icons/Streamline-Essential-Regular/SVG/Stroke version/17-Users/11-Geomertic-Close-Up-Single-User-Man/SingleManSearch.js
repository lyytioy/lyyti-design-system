import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleManSearch = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-man-search_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle
      className="single-man-search_svg__cls-1"
      cx={10.5}
      cy={10.5}
      r={9.75}
    />,
    <path
      className="single-man-search_svg__cls-1"
      d="M17.394 17.394l5.856 5.856"
    />,
    <circle
      className="single-man-search_svg__cls-1"
      cx={10.501}
      cy={8.072}
      r={3.198}
    />,
    <path
      className="single-man-search_svg__cls-1"
      d="M15 14.823a5.709 5.709 0 00-9 0M13.7 8.178a6.425 6.425 0 01-1.776.25A6.371 6.371 0 017.6 6.741"
    />
  );

export default SvgSingleManSearch;
