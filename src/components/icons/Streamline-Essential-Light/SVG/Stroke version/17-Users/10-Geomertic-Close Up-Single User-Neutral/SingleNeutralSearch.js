import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleNeutralSearch = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-neutral-search_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <g id="single-neutral-search_svg__New_Symbol_1" data-name="New Symbol 1">
      <circle
        className="single-neutral-search_svg__cls-1"
        cx={10.5}
        cy={7.75}
        r={3.25}
      />
      <path
        d="M15.556 16a5.321 5.321 0 00-10 0"
        strokeWidth={0.989}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>,
    <circle
      className="single-neutral-search_svg__cls-1"
      cx={10.5}
      cy={10.5}
      r={10}
    />,
    <path
      className="single-neutral-search_svg__cls-1"
      d="M23.5 23.5l-5.929-5.929"
    />
  );

export default SvgSingleNeutralSearch;
