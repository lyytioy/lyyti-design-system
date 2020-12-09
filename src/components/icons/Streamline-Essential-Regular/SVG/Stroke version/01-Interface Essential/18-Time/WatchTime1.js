import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgWatchTime1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".watch-time-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle
      className="watch-time-1_svg__a"
      cx={12.798}
      cy={11.202}
      r={5.185}
    />,
    <path
      className="watch-time-1_svg__a"
      d="M20.744 8.494l2.072-2.072a1.481 1.481 0 000-2.095l-3.143-3.143a1.482 1.482 0 00-2.095 0L15.412 3.35M13.322 9.631l-.872 1.919M12.404 11.596l1.528 1.528M10.057 19.182L5.988 23.25l-3.759-.94a.738.738 0 01-.539-.539l-.94-3.759 4.193-4.193"
    />,
    <path
      className="watch-time-1_svg__a"
      d="M5.625 18a.375.375 0 10.375.375.375.375 0 00-.375-.375"
    />
  );

export default SvgWatchTime1;
