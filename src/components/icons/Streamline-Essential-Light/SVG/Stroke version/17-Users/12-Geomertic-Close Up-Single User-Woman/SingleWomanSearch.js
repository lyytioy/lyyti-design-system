import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleWomanSearch = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-woman-search_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <g id="single-woman-search_svg__New_Symbol_4" data-name="New Symbol 4">
      <path
        className="single-woman-search_svg__cls-1"
        d="M14.869 11.873a4.724 4.724 0 01-.687-2.617V8.185a3.683 3.683 0 10-7.366 0v1.071a4.724 4.724 0 01-.687 2.617"
      />
      <path
        className="single-woman-search_svg__cls-1"
        d="M6.816 8.793A4.875 4.875 0 0010.5 7.105a4.877 4.877 0 003.683 1.688M13.745 8.773a3.25 3.25 0 01-6.492 0"
      />
    </g>,
    <path
      className="single-woman-search_svg__cls-1"
      d="M15.382 16.5a5.472 5.472 0 00-9.764 0"
    />,
    <circle
      className="single-woman-search_svg__cls-1"
      cx={10.5}
      cy={10.5}
      r={10}
    />,
    <path
      className="single-woman-search_svg__cls-1"
      d="M23.5 23.5l-5.929-5.929"
    />
  );

export default SvgSingleWomanSearch;
