import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleWomanPodium = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-woman-podium_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <g id="single-woman-podium_svg__New_Symbol_4" data-name="New Symbol 4">
      <path
        className="single-woman-podium_svg__cls-1"
        d="M16.37 8.623a4.724 4.724 0 01-.688-2.617V4.935a3.683 3.683 0 10-7.365 0v1.071a4.715 4.715 0 01-.688 2.617"
      />
      <path
        className="single-woman-podium_svg__cls-1"
        d="M8.317 5.543A4.877 4.877 0 0012 3.855a4.873 4.873 0 003.682 1.688M15.245 5.523a3.249 3.249 0 01-6.491 0"
      />
    </g>,
    <path
      className="single-woman-podium_svg__cls-1"
      d="M17.288 14.25a5.5 5.5 0 00-10.576 0M21 16.25l-1.5 7M4.5 23.25l-1.5-7M1 16.25h22"
    />
  );

export default SvgSingleWomanPodium;
