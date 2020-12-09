import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgModernMusicMix = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".modern-music-mix_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="modern-music-mix_svg__a"
      d="M20.5 12.4v10a1 1 0 01-1 1h-18a1 1 0 01-1-1v-18a1 1 0 011-1h11M5.5 3.398v20M10.5 13.398v10M10.5 3.398v5M15.5 14.398v9M10.5 8.398H.5M10.5 13.398H.5M20.5 18.398H.5"
    />,
    <circle className="modern-music-mix_svg__a" cx={13.5} cy={10.398} r={2} />,
    <circle className="modern-music-mix_svg__a" cx={21.5} cy={8.398} r={2} />,
    <path
      className="modern-music-mix_svg__a"
      d="M23.5 8.4V1.6a1 1 0 00-1.184-.98l-6 1.125a1 1 0 00-.816.982V10.4"
    />
  );

export default SvgModernMusicMix;
