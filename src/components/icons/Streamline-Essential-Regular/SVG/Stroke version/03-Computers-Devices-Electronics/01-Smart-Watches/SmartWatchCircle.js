import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmartWatchCircle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smart-watch-circle_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="smart-watch-circle_svg__a"
      d="M8.25 6.388V2.25a1.5 1.5 0 011.5-1.5h4.5a1.5 1.5 0 011.5 1.5v4.138M8.25 17.612v4.138a1.5 1.5 0 001.5 1.5h4.5a1.5 1.5 0 001.5-1.5v-4.138"
    />,
    <circle className="smart-watch-circle_svg__a" cx={12} cy={12} r={6.75} />
  );

export default SvgSmartWatchCircle;
