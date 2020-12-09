import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgStopwatch = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".stopwatch_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="stopwatch_svg__a" cx={12} cy={14.25} r={9} />,
    <path
      className="stopwatch_svg__a"
      d="M18 7.5l1.875-1.875M19.5 5.25l.75.75M12 5.25V.75M14.25.75h-4.5M12 15l-3.75-4.151"
    />
  );

export default SvgStopwatch;
