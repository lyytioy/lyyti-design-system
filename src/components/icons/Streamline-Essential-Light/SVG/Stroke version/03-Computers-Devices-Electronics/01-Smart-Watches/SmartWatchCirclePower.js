import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmartWatchCirclePower = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smart-watch-circle-power_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="smart-watch-circle-power_svg__a"
      d="M7.328 4.897L8.5.5h7l1.172 4.398M7.31 19.037L8.5 23.5h7l1.206-4.42"
    />,
    <circle
      className="smart-watch-circle-power_svg__a"
      cx={12}
      cy={12}
      r={8.5}
    />,
    <path
      className="smart-watch-circle-power_svg__a"
      d="M12 8v3.429M14.828 9.672a4 4 0 11-5.656 0"
    />
  );

export default SvgSmartWatchCirclePower;
