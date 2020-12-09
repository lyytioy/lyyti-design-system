import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmartWatchCircleMissedCall = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smart-watch-circle-missed-call_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="smart-watch-circle-missed-call_svg__a"
      d="M7.328 4.897L8.5.5h7l1.172 4.398M7.31 19.037L8.5 23.5h7l1.206-4.42"
    />,
    <circle
      className="smart-watch-circle-missed-call_svg__a"
      cx={12}
      cy={12}
      r={8.5}
    />,
    <path
      className="smart-watch-circle-missed-call_svg__a"
      d="M8.78 12.676l1.459-1.458a.781.781 0 000-1.107l-.83-.832a.786.786 0 00-1.109 0l-.455.456a1.172 1.172 0 00-.145 1.478 18.2 18.2 0 005.091 5.092 1.178 1.178 0 001.479-.149l.455-.455a.78.78 0 000-1.107l-.83-.831a.783.783 0 00-1.108 0l-1.46 1.46M12.501 11.5l3-3M14.501 11.5h-2v-2"
    />
  );

export default SvgSmartWatchCircleMissedCall;
