import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMultipleMan = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".multiple-man_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="multiple-man_svg__cls-1"
      d="M.5 20.5a7 7 0 0114 0zM13.994 6.558a7.023 7.023 0 003.923 1.192 7.047 7.047 0 002.794-.575"
    />,
    <path
      className="multiple-man_svg__cls-1"
      d="M13.26 5a4.249 4.249 0 11.74 6.189 4.381 4.381 0 01-.5-.429M14.5 13.79a7.005 7.005 0 019 6.71H17M3.838 5.592a7.062 7.062 0 007.873 1.583"
    />,
    <circle className="multiple-man_svg__cls-1" cx={7.5} cy={7.75} r={4.25} />
  );

export default SvgMultipleMan;
