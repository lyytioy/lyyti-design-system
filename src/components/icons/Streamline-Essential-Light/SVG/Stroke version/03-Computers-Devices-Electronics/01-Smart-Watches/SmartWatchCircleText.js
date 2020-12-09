import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmartWatchCircleText = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smart-watch-circle-text_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="smart-watch-circle-text_svg__a"
      d="M7.328 4.897L8.5.5h7l1.172 4.398M7.31 19.037L8.5 23.5h7l1.206-4.42"
    />,
    <circle
      className="smart-watch-circle-text_svg__a"
      cx={12}
      cy={12}
      r={8.5}
    />,
    <path
      className="smart-watch-circle-text_svg__a"
      d="M15.5 8.5h-6a1 1 0 00-1 1v4a1 1 0 001 1h1v2l2.5-2h2.5a1 1 0 001-1v-4a1 1 0 00-1-1zM10.5 10.5h4M10.5 12.5h3"
    />
  );

export default SvgSmartWatchCircleText;
