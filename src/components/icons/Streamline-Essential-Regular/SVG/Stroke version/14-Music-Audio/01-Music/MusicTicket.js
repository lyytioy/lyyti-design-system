import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMusicTicket = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".music-ticket_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="music-ticket_svg__a" cx={6.75} cy={15} r={1.5} />,
    <circle className="music-ticket_svg__a" cx={12.75} cy={13.5} r={1.5} />,
    <path
      className="music-ticket_svg__a"
      d="M14.25 13.5V9a1.5 1.5 0 00-1.864-1.455l-3 .75A1.5 1.5 0 008.25 9.75V15M17.625 15.75a.375.375 0 11-.375.375.375.375 0 01.375-.375M17.625 12a.375.375 0 11-.375.375.375.375 0 01.375-.375M17.625 8.25a.375.375 0 11-.375.375.375.375 0 01.375-.375"
    />,
    <path
      className="music-ticket_svg__a"
      d="M21 12a2.25 2.25 0 012.25-2.25V6a1.5 1.5 0 00-1.5-1.5H2.25A1.5 1.5 0 00.75 6v3.75a2.25 2.25 0 010 4.5V18a1.5 1.5 0 001.5 1.5h19.5a1.5 1.5 0 001.5-1.5v-3.75A2.25 2.25 0 0121 12z"
    />
  );

export default SvgMusicTicket;
