import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMusicTicket = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".music-ticket_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="music-ticket_svg__a"
      d="M23.5 15a3 3 0 010-6V5.5a1 1 0 00-1-1h-21a1 1 0 00-1 1V9a3 3 0 010 6v3.5a1 1 0 001 1h21a1 1 0 001-1zM19 6.75a.25.25 0 01.25.25M18.75 7a.25.25 0 01.25-.25M19 7.25a.25.25 0 01-.25-.25M19.25 7a.25.25 0 01-.25.25M19 9.75a.25.25 0 01.25.25M18.75 10a.25.25 0 01.25-.25M19 10.25a.25.25 0 01-.25-.25M19.25 10a.25.25 0 01-.25.25M19 13.75a.25.25 0 01.25.25M18.75 14a.25.25 0 01.25-.25M19 14.25a.25.25 0 01-.25-.25M19.25 14a.25.25 0 01-.25.25M19 16.75a.25.25 0 01.25.25M18.75 17a.25.25 0 01.25-.25M19 17.25a.25.25 0 01-.25-.25M19.25 17a.25.25 0 01-.25.25"
    />,
    <circle className="music-ticket_svg__a" cx={8.25} cy={14.75} r={1.25} />,
    <circle className="music-ticket_svg__a" cx={13.25} cy={13.25} r={1.25} />,
    <path
      className="music-ticket_svg__a"
      d="M9.5 14.75v-4.417a1 1 0 01.684-.948l3-.834A1 1 0 0114.5 9.5v3.75"
    />
  );

export default SvgMusicTicket;
