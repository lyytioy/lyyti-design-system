import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneActionMusic = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phone-action-music_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="phone-action-music_svg__a"
      d="M14.25 15v5.518a2.732 2.732 0 01-2.733 2.732H4.983a2.732 2.732 0 01-2.733-2.732V4.983A2.733 2.733 0 014.983 2.25h6.267M2.25 18.75h12"
    />,
    <circle
      className="phone-action-music_svg__a"
      cx={12.375}
      cy={10.294}
      r={1.875}
    />,
    <circle
      className="phone-action-music_svg__a"
      cx={19.875}
      cy={8.044}
      r={1.875}
    />,
    <path
      className="phone-action-music_svg__a"
      d="M14.25 10.294V3.5a1.5 1.5 0 011.026-1.423l4.5-1.25A1.5 1.5 0 0121.75 2.25v5.794"
    />
  );

export default SvgPhoneActionMusic;
