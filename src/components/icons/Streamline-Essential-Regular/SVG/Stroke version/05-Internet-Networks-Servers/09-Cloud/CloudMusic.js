import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCloudMusic = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cloud-music_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="cloud-music_svg__a" cx={13.875} cy={21.375} r={1.875} />,
    <circle className="cloud-music_svg__a" cx={21.375} cy={19.125} r={1.875} />,
    <path
      className="cloud-music_svg__a"
      d="M15.75 21.375v-6.794a1.5 1.5 0 011.026-1.423l4.5-1.25a1.5 1.5 0 011.974 1.423v5.794M22.752 8.726a4.867 4.867 0 00-7.141-1.861A7.5 7.5 0 108.25 15.75h4.5"
    />
  );

export default SvgCloudMusic;
