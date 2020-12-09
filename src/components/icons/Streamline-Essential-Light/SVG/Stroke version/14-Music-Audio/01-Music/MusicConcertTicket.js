import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMusicConcertTicket = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".music-concert-ticket_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="music-concert-ticket_svg__a"
      d="M23.5 8.5v-3a2 2 0 00-2-2h-19a2 2 0 00-2 2v3H1a3.5 3.5 0 010 7H.5v3a2 2 0 002 2h19a2 2 0 002-2v-3H23a3.5 3.5 0 010-7z"
    />,
    <path
      className="music-concert-ticket_svg__a"
      d="M4.5 5.75a.25.25 0 11-.25.25.25.25 0 01.25-.25M7.5 5.75a.25.25 0 11-.25.25.25.25 0 01.25-.25M10.5 5.75a.25.25 0 11-.25.25.25.25 0 01.25-.25M13.5 5.75a.25.25 0 11-.25.25.25.25 0 01.25-.25M16.5 5.75a.25.25 0 11-.25.25.25.25 0 01.25-.25M19.5 5.75a.25.25 0 11-.25.25.25.25 0 01.25-.25M4.5 17.75a.25.25 0 11-.25.25.25.25 0 01.25-.25M7.5 17.75a.25.25 0 11-.25.25.25.25 0 01.25-.25M10.5 17.75a.25.25 0 11-.25.25.25.25 0 01.25-.25M13.5 17.75a.25.25 0 11-.25.25.25.25 0 01.25-.25M16.5 17.75a.25.25 0 11-.25.25.25.25 0 01.25-.25M19.5 17.75a.25.25 0 11-.25.25.25.25 0 01.25-.25"
    />,
    <circle
      className="music-concert-ticket_svg__a"
      cx={9.25}
      cy={14.75}
      r={1.25}
    />,
    <circle
      className="music-concert-ticket_svg__a"
      cx={14.25}
      cy={13.25}
      r={1.25}
    />,
    <path
      className="music-concert-ticket_svg__a"
      d="M10.5 14.75v-4.417a1 1 0 01.684-.948l3-.834A1 1 0 0115.5 9.5v3.75"
    />
  );

export default SvgMusicConcertTicket;
