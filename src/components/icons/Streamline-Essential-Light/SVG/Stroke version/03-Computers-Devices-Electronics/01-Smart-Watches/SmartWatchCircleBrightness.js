import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmartWatchCircleBrightness = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smart-watch-circle-brightness_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="smart-watch-circle-brightness_svg__a"
      d="M7.328 4.897L8.5.5h7l1.172 4.398M7.31 19.037L8.5 23.5h7l1.206-4.42"
    />,
    <circle
      className="smart-watch-circle-brightness_svg__a"
      cx={12}
      cy={12}
      r={8.5}
    />,
    <circle
      className="smart-watch-circle-brightness_svg__a"
      cx={12}
      cy={12}
      r={1.5}
    />,
    <path
      className="smart-watch-circle-brightness_svg__a"
      d="M14.25 7.5a.25.25 0 11-.25.25.25.25 0 01.25-.25M9.75 7.5a.25.25 0 11-.25.25.25.25 0 01.25-.25M14.25 15.5a.25.25 0 11-.25.25.25.25 0 01.25-.25M16.75 11.5a.25.25 0 11-.25.25.25.25 0 01.25-.25M7.25 11.5a.25.25 0 11-.25.25.25.25 0 01.25-.25M9.75 15.5a.25.25 0 11-.25.25.25.25 0 01.25-.25"
    />
  );

export default SvgSmartWatchCircleBrightness;
