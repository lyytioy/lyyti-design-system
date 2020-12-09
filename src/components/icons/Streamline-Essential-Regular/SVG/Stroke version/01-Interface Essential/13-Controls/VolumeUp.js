import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVolumeUp = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".volume-up_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="volume-up_svg__a" cx={11.489} cy={12.796} r={7.5} />,
    <path
      className="volume-up_svg__a"
      d="M4.566 21.005a10.739 10.739 0 1117.648-8.755M23.251 12.25h-2.046M5.353 19.955L3.819 22"
    />,
    <path
      className="volume-up_svg__a"
      d="M14.251 8.875a.375.375 0 11-.375.375.375.375 0 01.375-.375"
    />
  );

export default SvgVolumeUp;
