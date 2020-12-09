import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmartWatchCircleBell = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smart-watch-circle-bell_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="smart-watch-circle-bell_svg__a"
      d="M7.328 4.897L8.5.5h7l1.172 4.398M7.31 19.037L8.5 23.5h7l1.206-4.42"
    />,
    <circle
      className="smart-watch-circle-bell_svg__a"
      cx={12}
      cy={12}
      r={8.5}
    />,
    <path
      className="smart-watch-circle-bell_svg__a"
      d="M15.5 12.086V10a3.5 3.5 0 00-3.688-3.495A3.633 3.633 0 008.5 10.2v1.888a3.415 3.415 0 01-1 2.414h9a3.415 3.415 0 01-1-2.416zM11.5 16.5h1"
    />
  );

export default SvgSmartWatchCircleBell;
