import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgBookTarget = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M7.5 17a8.484 8.484 0 0112.628-7.419.25.25 0 00.372-.218V6a2 2 0 00-1.6-1.96.5.5 0 01-.4-.489V2a2 2 0 00-2-2H4a3 3 0 00-3 3v18a3 3 0 003 3h6.443a.25.25 0 00.159-.443A8.483 8.483 0 017.5 17zM3 3a1 1 0 011-1h12.25a.25.25 0 01.25.25v1.5a.25.25 0 01-.25.25H4a1 1 0 01-1-1z" />,
    <path d="M16 10a7 7 0 107 7 7.008 7.008 0 00-7-7zm0 12a5 5 0 115-5 5.006 5.006 0 01-5 5z" />,
    <circle cx={16} cy={17} r={1.5} />
  );

export default SvgBookTarget;
