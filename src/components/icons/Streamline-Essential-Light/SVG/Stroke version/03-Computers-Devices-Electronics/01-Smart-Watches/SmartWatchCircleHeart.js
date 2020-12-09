import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmartWatchCircleHeart = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smart-watch-circle-heart_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="smart-watch-circle-heart_svg__a"
      d="M7.328 4.897L8.5.5h7l1.172 4.398M7.31 19.037L8.5 23.5h7l1.206-4.42"
    />,
    <circle
      className="smart-watch-circle-heart_svg__a"
      cx={12}
      cy={12}
      r={8.5}
    />,
    <path
      className="smart-watch-circle-heart_svg__a"
      d="M12 16.25l-4.139-4.318A2.449 2.449 0 017.4 9.1a2.449 2.449 0 013.922-.636l.678.68.676-.676A2.449 2.449 0 0116.6 9.1a2.45 2.45 0 01-.458 2.828z"
    />
  );

export default SvgSmartWatchCircleHeart;
