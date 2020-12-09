import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleWomanActions = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-woman-actions_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="single-woman-actions_svg__cls-1"
      d="M21.476 23.25a10.483 10.483 0 00-18.952 0M12 5.25a5.251 5.251 0 01-5.25 5.25 5.25 5.25 0 0010.5 0A5.25 5.25 0 0112 5.25z"
    />,
    <path
      className="single-woman-actions_svg__cls-1"
      d="M17.836 19.027a14.576 14.576 0 003.391-1.007 1.5 1.5 0 00.763-1.961l-1.376-3.21a4.5 4.5 0 01-.364-1.773V9a8.25 8.25 0 00-16.5 0v2.076a4.5 4.5 0 01-.364 1.773l-1.376 3.21a1.5 1.5 0 00.763 1.961 14.576 14.576 0 003.391 1.007"
    />
  );

export default SvgSingleWomanActions;
