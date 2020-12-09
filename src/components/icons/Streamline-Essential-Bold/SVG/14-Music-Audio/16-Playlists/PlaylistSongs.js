import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPlaylistSongs = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M7 3h10a1 1 0 000-2H7a1 1 0 000 2z" />,
    <circle cx={2} cy={2} r={2} />,
    <path d="M6 8a1 1 0 001 1h10a1 1 0 000-2H7a1 1 0 00-1 1z" />,
    <circle cx={2} cy={8} r={2} />,
    <path d="M10 13H7a1 1 0 000 2h3a1 1 0 000-2z" />,
    <circle cx={2} cy={14} r={2} />,
    <path d="M24 19.552V12.705a2 2 0 00-2.368-1.966l-6 1.125A2 2 0 0014 13.83v4.931a.255.255 0 01-.081.185.251.251 0 01-.192.064c-.075-.01-.15-.01-.227-.01a2.5 2.5 0 102.5 2.552V14.245a.5.5 0 01.408-.491l5-.938a.5.5 0 01.592.492v3.453a.255.255 0 01-.081.185.251.251 0 01-.192.064c-.075-.01-.15-.01-.227-.01a2.5 2.5 0 102.5 2.552z" />
  );

export default SvgPlaylistSongs;
