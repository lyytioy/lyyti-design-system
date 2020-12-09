import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPlaylistShare = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".playlist-share_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="playlist-share_svg__a"
      d="M20.25 8.25v-6a1.5 1.5 0 00-1.5-1.5H2.25a1.5 1.5 0 00-1.5 1.5v15a1.5 1.5 0 001.5 1.5h6"
    />,
    <circle
      className="playlist-share_svg__a"
      cx={6.375}
      cy={13.125}
      r={1.875}
    />,
    <path
      className="playlist-share_svg__a"
      d="M8.25 13.125V6.331a1.5 1.5 0 011.026-1.423l4.5-1.25a1.5 1.5 0 011.974 1.423V10.5"
    />,
    <circle className="playlist-share_svg__a" cx={13.5} cy={18} r={2.25} />,
    <circle className="playlist-share_svg__a" cx={21} cy={21} r={2.25} />,
    <circle className="playlist-share_svg__a" cx={21} cy={13.5} r={2.25} />,
    <path
      className="playlist-share_svg__a"
      d="M15.425 16.845l3.65-2.19M15.588 18.835l3.324 1.33"
    />
  );

export default SvgPlaylistShare;
