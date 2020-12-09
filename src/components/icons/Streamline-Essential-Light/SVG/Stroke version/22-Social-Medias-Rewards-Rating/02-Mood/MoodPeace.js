import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMoodPeace = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".mood-peace_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="mood-peace_svg__a"
      d="M19 15.25a1.5 1.5 0 01-3 0v-3a1.5 1.5 0 013 0zM16 14.25a1.5 1.5 0 01-3 0v-3a1.5 1.5 0 013 0z"
    />,
    <path
      className="mood-peace_svg__a"
      d="M10 11.25l.869-9.142a1.5 1.5 0 012.986.29L13 11.25M7.034 11.247l-.877-8.854a1.5 1.5 0 012.986-.286L10 11.25M11.5 19.25a4 4 0 00-4-4H11a2 2 0 000-4H7a2 2 0 00-2 2v5a3 3 0 003 3v2M18 16.665v1.085a3 3 0 01-3 3v2.5"
    />
  );

export default SvgMoodPeace;
