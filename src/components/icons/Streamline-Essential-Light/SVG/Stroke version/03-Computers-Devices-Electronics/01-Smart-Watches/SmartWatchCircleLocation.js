import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmartWatchCircleLocation = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smart-watch-circle-location_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="smart-watch-circle-location_svg__a"
      d="M7.328 4.897L8.5.5h7l1.172 4.398M7.31 19.037L8.5 23.5h7l1.206-4.42"
    />,
    <circle
      className="smart-watch-circle-location_svg__a"
      cx={12}
      cy={12}
      r={8.5}
    />,
    <path
      className="smart-watch-circle-location_svg__a"
      d="M16 11.5c0 2.5-4 6-4 6s-4-3.5-4-6a4 4 0 018 0z"
    />,
    <path
      className="smart-watch-circle-location_svg__a"
      d="M12 11.25a.25.25 0 11-.25.25.25.25 0 01.25-.25"
    />
  );

export default SvgSmartWatchCircleLocation;
