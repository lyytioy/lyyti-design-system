import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPlayerPhoneStation = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".player-phone-station_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="player-phone-station_svg__a" cx={5} cy={19} r={2.5} />,
    <path
      className="player-phone-station_svg__a"
      d="M5 18.75a.25.25 0 11-.25.25.25.25 0 01.25-.25"
    />,
    <circle className="player-phone-station_svg__a" cx={19} cy={19} r={2.5} />,
    <path
      className="player-phone-station_svg__a"
      d="M19 18.75a.25.25 0 11-.25.25.25.25 0 01.25-.25"
    />,
    <path
      className="player-phone-station_svg__a"
      d="M7.5 14.5H5a4.5 4.5 0 000 9h14a4.5 4.5 0 000-9h-2.5"
    />,
    <rect
      className="player-phone-station_svg__a"
      x={7.5}
      y={0.5}
      width={9}
      height={16}
      rx={2}
      ry={2}
    />,
    <path
      className="player-phone-station_svg__a"
      d="M7.5 3.5h8.978M7.5 13.5h8.978M8.5 21.5h1M15.5 21.5h-1M11.5 21.5h1"
    />
  );

export default SvgPlayerPhoneStation;
