import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgHeadphonesWave = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".headphones-wave_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="headphones-wave_svg__a"
      d="M4.5 11.757a7.5 7.5 0 0115 0M4.5 11.757a4 4 0 00-.571 7.959.5.5 0 00.571-.5zM19.5 11.757a4 4 0 01.339 7.985.312.312 0 01-.339-.311zM17.5 16.257H16l-1.5 3-1.5-7-2 5-1.5-3-1.5 2H6.5"
    />
  );

export default SvgHeadphonesWave;
