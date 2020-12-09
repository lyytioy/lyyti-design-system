import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMonitor = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M7.5 19a.5.5 0 010-1h1.36l.093-.15A6.788 6.788 0 0010.017 15H3c-.827 0-1.5-.673-1.5-1.5v-12C1.5.673 2.173 0 3 0h18c.827 0 1.5.673 1.5 1.5v12c0 .827-.673 1.5-1.5 1.5h-7.018a6.736 6.736 0 001.057 2.838l.101.162h1.36a.5.5 0 010 1h-9zm6.463-1a7.752 7.752 0 01-.988-3h-1.951a7.759 7.759 0 01-.989 3h3.928zM2.5 13.5a.5.5 0 00.5.5h18a.5.5 0 00.5-.5V12h-19v1.5zm19-2.5V1.5A.5.5 0 0021 1H3a.5.5 0 00-.5.5V11h19zM4 24a.5.5 0 010-1h7.5v-2.5a.5.5 0 011 0V23H20a.5.5 0 010 1H4z" />
  );

export default SvgMonitor;
