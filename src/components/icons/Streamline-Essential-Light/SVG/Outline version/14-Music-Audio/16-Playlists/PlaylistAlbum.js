import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPlaylistAlbum = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M1.5 21C.673 21 0 20.327 0 19.5v-18C0 .673.673 0 1.5 0h18c.827 0 1.5.673 1.5 1.5v18c0 .827-.673 1.5-1.5 1.5h-18zm0-20a.5.5 0 00-.5.5v18a.5.5 0 00.5.5h18a.5.5 0 00.5-.5v-18a.5.5 0 00-.5-.5h-18z" />,
    <path d="M4.5 24c-.827 0-1.5-.673-1.5-1.5a.5.5 0 011 0 .5.5 0 00.5.5h18a.5.5 0 00.5-.5v-18c0-.276-.224-.5-.5-.5a.5.5 0 010-1c.827 0 1.5.673 1.5 1.5v18c0 .827-.673 1.5-1.5 1.5h-18z" />,
    <path d="M6 16c-1.103 0-2-.897-2-2a2.002 2.002 0 013-1.732V8.254c0-.666.448-1.259 1.088-1.442l5-1.429a1.494 1.494 0 011.14.131A1.49 1.49 0 0115 6.826V13c0 1.103-.897 2-2 2s-2-.897-2-2a2.002 2.002 0 013-1.732V6.826a.503.503 0 00-.637-.482l-5 1.429A.503.503 0 008 8.254V14c0 1.103-.897 2-2 2zm0-3a1.001 1.001 0 000 2 1.001 1.001 0 000-2zm7-1a1 1 0 100 2 1 1 0 000-2z" />
  );

export default SvgPlaylistAlbum;