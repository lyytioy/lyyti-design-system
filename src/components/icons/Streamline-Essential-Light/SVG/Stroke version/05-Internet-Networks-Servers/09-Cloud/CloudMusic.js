import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCloudMusic = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cloud-music_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="cloud-music_svg__a"
      d="M20.5 13.905A4.311 4.311 0 0023 9.856a4.71 4.71 0 00-4.954-4.634A6.7 6.7 0 0012 1.5a6.606 6.606 0 00-6.675 6.108A3.562 3.562 0 001 11.018 3.184 3.184 0 003.5 14.3"
    />,
    <circle className="cloud-music_svg__a" cx={7} cy={20.5} r={2} />,
    <circle className="cloud-music_svg__a" cx={15} cy={18.5} r={2} />,
    <path
      className="cloud-music_svg__a"
      d="M17 18.5v-6.795a1 1 0 00-1.184-.983l-6 1.125a1 1 0 00-.816.982V20.5"
    />
  );

export default SvgCloudMusic;
