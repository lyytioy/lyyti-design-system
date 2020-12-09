import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmartWatchCircleTarget = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smart-watch-circle-target_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="smart-watch-circle-target_svg__a"
      d="M13.928 15A6.751 6.751 0 117.88 5.25M3.38 6.97V2.25a1.5 1.5 0 011.5-1.5h4.5"
    />,
    <path
      className="smart-watch-circle-target_svg__a"
      d="M12.38 17.03v4.72a1.5 1.5 0 01-1.5 1.5h-6a1.5 1.5 0 01-1.5-1.5v-4.72M12.38 3L14.63.75 16.88 3M14.63.75V9M22.88 7.5l-2.25 2.25-2.25-2.25M20.63 9.75V1.5"
    />
  );

export default SvgSmartWatchCircleTarget;
