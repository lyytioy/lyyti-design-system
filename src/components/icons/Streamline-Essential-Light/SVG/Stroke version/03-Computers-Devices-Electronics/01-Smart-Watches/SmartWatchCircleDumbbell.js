import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmartWatchCircleDumbbell = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smart-watch-circle-dumbbell_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="smart-watch-circle-dumbbell_svg__a"
      d="M7.328 4.897L8.5.5h7l1.172 4.398M7.31 19.037L8.5 23.5h7l1.206-4.42"
    />,
    <circle
      className="smart-watch-circle-dumbbell_svg__a"
      cx={12}
      cy={12}
      r={8.5}
    />,
    <path
      className="smart-watch-circle-dumbbell_svg__a"
      d="M10.5 12.5h3M8.5 9.5h2v6h-2a1 1 0 01-1-1v-4a1 1 0 011-1zM13.5 9.5h2a1 1 0 011 1v4a1 1 0 01-1 1h-2v-6zM16.5 12.5h1M6.5 12.5h1"
    />
  );

export default SvgSmartWatchCircleDumbbell;
