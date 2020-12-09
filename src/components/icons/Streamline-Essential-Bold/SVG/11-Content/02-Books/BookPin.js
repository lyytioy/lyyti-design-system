import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgBookPin = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M20.15 4.04a.5.5 0 01-.4-.489V2a2 2 0 00-2-2H5.25a3 3 0 00-3 3v18a3 3 0 003 3h14.5a2 2 0 002-2V6a2 2 0 00-1.6-1.96zm-4.6 8.46c0 1.056-1.212 3.155-3.24 5.616a.4.4 0 01-.31.146.4.4 0 01-.309-.145C9.662 15.655 8.45 13.556 8.45 12.5a3.55 3.55 0 017.1 0zm2.2-8.75a.25.25 0 01-.25.25H5.25a1 1 0 010-2H17.5a.25.25 0 01.25.25z" />,
    <circle cx={12} cy={12.5} r={1.5} />
  );

export default SvgBookPin;
