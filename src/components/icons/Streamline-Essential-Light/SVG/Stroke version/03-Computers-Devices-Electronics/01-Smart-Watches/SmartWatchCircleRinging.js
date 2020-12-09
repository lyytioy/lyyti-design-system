import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmartWatchCircleRinging = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smart-watch-circle-ringing_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="smart-watch-circle-ringing_svg__a"
      d="M7.328 4.897L8.5.5h7l1.172 4.398M7.31 19.037L8.5 23.5h7l1.206-4.42"
    />,
    <circle
      className="smart-watch-circle-ringing_svg__a"
      cx={12}
      cy={12}
      r={8.5}
    />,
    <path
      className="smart-watch-circle-ringing_svg__a"
      d="M13.5 11.084V13.5a1.134 1.134 0 001 1h1a1.075 1.075 0 001-1v-1c0-2-9-2-9 0v1a1.075 1.075 0 001 1h1a1.075 1.075 0 001-1v-2.423M12.002 7.5V9M15.127 8.182l-.625 1.363M8.877 8.182l.625 1.363"
    />
  );

export default SvgSmartWatchCircleRinging;
