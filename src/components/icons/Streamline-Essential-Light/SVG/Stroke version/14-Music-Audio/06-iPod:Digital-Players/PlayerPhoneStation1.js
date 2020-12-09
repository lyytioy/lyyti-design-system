import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPlayerPhoneStation1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".player-phone-station-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="player-phone-station-1_svg__a"
      d="M16.5 11.5h5a2 2 0 012 2v8a2 2 0 01-2 2h-19a2 2 0 01-2-2v-8a2 2 0 012-2h5M18.5 11.5v12M5.5 11.5v12"
    />,
    <rect
      className="player-phone-station-1_svg__a"
      x={7.5}
      y={0.5}
      width={9}
      height={16}
      rx={2}
      ry={2}
    />,
    <circle className="player-phone-station-1_svg__a" cx={21} cy={20} r={1} />,
    <circle className="player-phone-station-1_svg__a" cx={21} cy={15} r={1} />,
    <circle className="player-phone-station-1_svg__a" cx={3} cy={20} r={1} />,
    <circle className="player-phone-station-1_svg__a" cx={3} cy={15} r={1} />,
    <path
      className="player-phone-station-1_svg__a"
      d="M7.5 20.5h3M13.5 20.5h2.979M7.5 3.5h8.979M7.5 13.5h8.979"
    />
  );

export default SvgPlayerPhoneStation1;
