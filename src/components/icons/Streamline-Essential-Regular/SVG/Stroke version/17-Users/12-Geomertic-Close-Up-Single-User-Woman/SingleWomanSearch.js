import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleWomanSearch = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-woman-search_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle
      className="single-woman-search_svg__cls-1"
      cx={10.5}
      cy={10.5}
      r={9.75}
    />,
    <path
      className="single-woman-search_svg__cls-1"
      d="M17.394 17.394l5.856 5.856M14.726 15.375a4.518 4.518 0 00-2.384-2.591L10.5 16.125l-1.84-3.341a4.518 4.518 0 00-2.384 2.591"
    />,
    <circle
      className="single-woman-search_svg__cls-1"
      cx={10.501}
      cy={7.875}
      r={3}
    />,
    <path
      className="single-woman-search_svg__cls-1"
      d="M7.5 7.875s0 3.75-2.25 3.75M13.5 7.875s0 3.75 2.25 3.75"
    />
  );

export default SvgSingleWomanSearch;
