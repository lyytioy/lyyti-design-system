import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMonitorMovie = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M24 2.84A2.548 2.548 0 0021.5.251h-19A2.548 2.548 0 000 2.84v13.911a3 3 0 003 3h7.25a.25.25 0 01.25.25v1.5a.25.25 0 01-.25.25H5a1 1 0 000 2h14a1 1 0 000-2h-6.25a.25.25 0 01-.25-.25V20a.25.25 0 01.25-.25H21a3 3 0 003-3zm-22 0a.551.551 0 01.5-.589h19a.551.551 0 01.5.589v11.911a.5.5 0 01-.5.5h-19a.5.5 0 01-.5-.5z" />,
    <path d="M6.25 5.251h2a1 1 0 000-2h-2a1 1 0 000 2zM10.75 5.251h2a1 1 0 000-2h-2a1 1 0 000 2zM18.25 4.251a1 1 0 00-1-1h-2a1 1 0 100 2h2a1 1 0 001-1zM9.25 13.251a1 1 0 00-1-1h-2a1 1 0 100 2h2a1 1 0 001-1zM12.75 12.251h-2a1 1 0 000 2h2a1 1 0 000-2zM18.25 13.251a1 1 0 00-1-1h-2a1 1 0 000 2h2a1 1 0 001-1z" />,
    <rect x={5.5} y={6.251} width={5.5} height={5} rx={0.25} ry={0.25} />,
    <rect x={12.5} y={6.251} width={5.5} height={5} rx={0.25} ry={0.25} />
  );

export default SvgMonitorMovie;
