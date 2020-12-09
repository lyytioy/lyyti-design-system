import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPlayerPhoneStation = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".player-phone-station_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle
      className="player-phone-station_svg__a"
      cx={5.25}
      cy={18.75}
      r={1.5}
    />,
    <circle
      className="player-phone-station_svg__a"
      cx={18.75}
      cy={18.75}
      r={1.5}
    />,
    <path
      className="player-phone-station_svg__a"
      d="M7.5 14.25H5.25a4.5 4.5 0 000 9h13.5a4.5 4.5 0 000-9H16.5"
    />,
    <path
      className="player-phone-station_svg__a"
      d="M16.458 2.71A1.984 1.984 0 0014.451.75l-5 .018A1.985 1.985 0 007.46 2.743l.04 11.805a1.984 1.984 0 002.006 1.961l5-.018a1.984 1.984 0 001.994-1.975zM7.5 12.75h9M11.25 20.25h1.5"
    />
  );

export default SvgPlayerPhoneStation;
