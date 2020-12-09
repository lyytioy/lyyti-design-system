import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleManSearch = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-man-search_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle
      className="single-man-search_svg__cls-1"
      cx={10.5}
      cy={10.5}
      r={10}
    />,
    <path
      className="single-man-search_svg__cls-1"
      d="M23.5 23.5l-5.929-5.929M16 15l-3.5-1.5v-2s.866-.35.866-2.5c.684 0 .944-2-.007-2a2.63 2.63 0 00.44-2c-.491-2-5.331-2-5.822 0-2.066-.43-.422 1.712-.422 2-.981 0-.981 2 0 2 0 2.15.945 2.5.945 2.5v2L5 15"
    />
  );

export default SvgSingleManSearch;
