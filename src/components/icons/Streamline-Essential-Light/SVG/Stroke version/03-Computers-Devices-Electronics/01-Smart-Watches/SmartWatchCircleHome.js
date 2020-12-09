import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmartWatchCircleHome = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smart-watch-circle-home_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="smart-watch-circle-home_svg__a"
      d="M7.328 4.897L8.5.5h7l1.172 4.398M7.31 19.037L8.5 23.5h7l1.206-4.42"
    />,
    <circle
      className="smart-watch-circle-home_svg__a"
      cx={12}
      cy={12}
      r={8.5}
    />,
    <path
      className="smart-watch-circle-home_svg__a"
      d="M10.5 15.5V13a1.5 1.5 0 013 0v2.5"
    />,
    <path
      className="smart-watch-circle-home_svg__a"
      d="M8.5 9.682V15.5h7V9.682"
    />,
    <path
      className="smart-watch-circle-home_svg__a"
      d="M6.5 11.5l5.5-5 5.5 5"
    />
  );

export default SvgSmartWatchCircleHome;
