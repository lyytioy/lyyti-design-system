import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleNeutralSearch = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-neutral-search_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle
      className="single-neutral-search_svg__cls-1"
      cx={10.5}
      cy={10.5}
      r={9.75}
    />,
    <path
      className="single-neutral-search_svg__cls-1"
      d="M17.394 17.394l5.856 5.856"
    />,
    <circle
      className="single-neutral-search_svg__cls-1"
      cx={10.5}
      cy={8.62}
      r={3.375}
    />,
    <path
      className="single-neutral-search_svg__cls-1"
      d="M15 15.494a6.065 6.065 0 00-9 0"
    />
  );

export default SvgSingleNeutralSearch;
