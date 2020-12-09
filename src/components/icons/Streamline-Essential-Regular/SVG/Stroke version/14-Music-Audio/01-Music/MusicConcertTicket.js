import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMusicConcertTicket = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".music-concert-ticket_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="music-concert-ticket_svg__a"
      d="M19.5 12a3.75 3.75 0 013.75-3.75V4.5a1.5 1.5 0 00-1.5-1.5H2.25a1.5 1.5 0 00-1.5 1.5v3.75a3.75 3.75 0 010 7.5v3.75a1.5 1.5 0 001.5 1.5h19.5a1.5 1.5 0 001.5-1.5v-3.75A3.75 3.75 0 0119.5 12z"
    />,
    <circle
      className="music-concert-ticket_svg__a"
      cx={8.25}
      cy={16.5}
      r={1.5}
    />,
    <circle
      className="music-concert-ticket_svg__a"
      cx={14.25}
      cy={15}
      r={1.5}
    />,
    <path
      className="music-concert-ticket_svg__a"
      d="M15.75 15v-4.079a1.5 1.5 0 00-1.864-1.455l-3 .75a1.5 1.5 0 00-1.136 1.455V16.5M4.875 6a.375.375 0 11-.375.375A.375.375 0 014.875 6M9.375 6A.375.375 0 119 6.375.375.375 0 019.375 6M14.625 6a.375.375 0 11-.375.375.375.375 0 01.375-.375M19.125 6a.375.375 0 11-.375.375.375.375 0 01.375-.375"
    />
  );

export default SvgMusicConcertTicket;
