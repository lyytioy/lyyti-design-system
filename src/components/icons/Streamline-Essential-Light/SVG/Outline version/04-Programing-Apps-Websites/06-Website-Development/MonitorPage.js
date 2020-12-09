import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMonitorPage = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M7 24a.5.5 0 010-1h3v-2H1.5C.673 21 0 20.327 0 19.5v-13C0 5.673.673 5 1.5 5h1a.5.5 0 010 1h-1a.5.5 0 00-.5.5V17h22V6.5a.5.5 0 00-.5-.5h-1a.5.5 0 010-1h1c.827 0 1.5.673 1.5 1.5v13c0 .827-.673 1.5-1.5 1.5H14v2h3a.5.5 0 010 1H7zm6-1v-2h-2v2h2zM1 19.5a.5.5 0 00.5.5h21a.5.5 0 00.5-.5V18H1v1.5z" />,
    <path d="M19.5 16a.5.5 0 01-.5-.5V5H5v10.5a.5.5 0 01-1 0v-14C4 .673 4.673 0 5.5 0h13c.827 0 1.5.673 1.5 1.5v14a.5.5 0 01-.5.5zM19 4V1.5a.5.5 0 00-.5-.5h-13a.5.5 0 00-.5.5V4h14z" />,
    <path d="M7 12.001c-.551 0-1-.449-1-1v-3c0-.551.449-1 1-1h3c.551 0 1 .449 1 1v3c0 .551-.449 1-1 1H7zm0-1h3v-3H7v3zM12.601 11.001a.5.5 0 010-1H17.5a.5.5 0 010 1h-4.899zM12.601 8.501a.5.5 0 010-1H17.5a.5.5 0 010 1h-4.899zM6.5 14a.5.5 0 010-1h11a.5.5 0 010 1h-11z" />,
    <circle cx={6.75} cy={2.75} r={0.75} />,
    <circle cx={8.75} cy={2.75} r={0.75} />,
    <circle cx={10.75} cy={2.75} r={0.75} />
  );

export default SvgMonitorPage;
