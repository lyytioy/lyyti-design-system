import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFloppyDisk = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M22 0H5.914A1.986 1.986 0 004.5.587L.586 4.5A2.009 2.009 0 000 5.915V22a2 2 0 002 2h20a2 2 0 002-2V2a2 2 0 00-2-2zm-3.5 2a.5.5 0 01.5.5v4A1.5 1.5 0 0117.5 8h-10A1.5 1.5 0 016 6.5v-4a.5.5 0 01.5-.5zM5 22a.5.5 0 01-.5-.5v-8A1.5 1.5 0 016 12h13a1.5 1.5 0 011.5 1.5v8a.5.5 0 01-.5.5z" />,
    <path d="M15 4.251v1.5a.75.75 0 101.5 0v-1.5a.75.75 0 10-1.5 0zM7 16.251h6.5a.75.75 0 000-1.5H7a.75.75 0 000 1.5zM7 20.251h11a.75.75 0 000-1.5H7a.75.75 0 000 1.5z" />
  );

export default SvgFloppyDisk;
