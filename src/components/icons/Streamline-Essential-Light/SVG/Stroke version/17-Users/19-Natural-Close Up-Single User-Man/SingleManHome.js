import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleManHome = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-man-home_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="single-man-home_svg__cls-1"
      d="M1.5 23.5a1 1 0 01-1-1V8.8a1 1 0 01.429-.821l10.5-7.3a1 1 0 011.142 0l10.5 7.3a1 1 0 01.429.821v13.7a1 1 0 01-1 1z"
    />,
    <path
      className="single-man-home_svg__cls-1"
      d="M4 20.25l.481-1.605a2 2 0 011.128-1.263L10 15.5v-2s-.945-.35-.945-2.5c-.981 0-.981-2 0-2 0-.288-1.644-2.43.422-2 .491-2 5.331-2 5.822 0a2.63 2.63 0 01-.44 2c.951 0 .691 2 .007 2 0 2.15-.866 2.5-.866 2.5v2l4.391 1.882a2 2 0 011.128 1.263L20 20.25"
    />
  );

export default SvgSingleManHome;
