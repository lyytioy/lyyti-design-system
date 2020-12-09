import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgStopwatch = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".stopwatch_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="stopwatch_svg__a" cx={12} cy={14.001} r={9.5} />,
    <path
      className="stopwatch_svg__a"
      d="M9 .501h6M18.717 7.284L20.5 5.501M10.5 4.618V.501h3v4.118M20 5.001l1 1M12 14.001l-4.5-4.5"
    />
  );

export default SvgStopwatch;
