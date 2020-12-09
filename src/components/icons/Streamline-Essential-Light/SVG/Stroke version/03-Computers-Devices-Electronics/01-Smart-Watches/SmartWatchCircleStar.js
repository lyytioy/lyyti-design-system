import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmartWatchCircleStar = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smart-watch-circle-star_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="smart-watch-circle-star_svg__a"
      d="M7.328 4.897L8.5.5h7l1.172 4.398M7.31 19.037L8.5 23.5h7l1.206-4.42"
    />,
    <circle
      className="smart-watch-circle-star_svg__a"
      cx={12}
      cy={12}
      r={8.5}
    />,
    <path
      className="smart-watch-circle-star_svg__a"
      d="M12.589 6.858L13.871 9.5h2.495a.612.612 0 01.431 1.069l-2.166 2.263 1.2 2.761a.654.654 0 01-.931.819L12 14.778l-2.9 1.634a.654.654 0 01-.931-.819l1.2-2.761L7.2 10.569A.612.612 0 017.632 9.5h2.5l1.285-2.642a.662.662 0 011.172 0z"
    />
  );

export default SvgSmartWatchCircleStar;
