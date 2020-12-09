import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgModernMusicMix = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".modern-music-mix_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle
      className="modern-music-mix_svg__a"
      cx={13.875}
      cy={11.044}
      r={1.875}
    />,
    <circle
      className="modern-music-mix_svg__a"
      cx={21.375}
      cy={8.794}
      r={1.875}
    />,
    <path
      className="modern-music-mix_svg__a"
      d="M15.75 11.044V4.25a1.5 1.5 0 011.026-1.423l4.5-1.25A1.5 1.5 0 0123.25 3v5.794"
    />,
    <path
      className="modern-music-mix_svg__a"
      d="M18.75 13.5V21a1.5 1.5 0 01-1.5 1.5h-15A1.5 1.5 0 01.75 21V6a1.5 1.5 0 011.5-1.5h10.5M6.75 4.5v18M12.75 15.75v6.75M.75 16.5h18M.75 10.5H9"
    />
  );

export default SvgModernMusicMix;
