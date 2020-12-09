import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMonitorGraph = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M24 2.84A2.548 2.548 0 0021.5.251h-19A2.548 2.548 0 000 2.84v13.911a3 3 0 003 3h7.25a.25.25 0 01.25.25v1.5a.25.25 0 01-.25.25H5a1 1 0 000 2h14a1 1 0 000-2h-6.25a.25.25 0 01-.25-.25V20a.25.25 0 01.25-.25H21a3 3 0 003-3zm-22 0a.551.551 0 01.5-.589h19a.551.551 0 01.5.589v11.911a.5.5 0 01-.5.5h-19a.5.5 0 01-.5-.5z" />,
    <rect x={5.5} y={9.251} width={3} height={4} rx={0.5} ry={0.5} />,
    <rect x={10.5} y={7.251} width={3} height={6} rx={0.5} ry={0.5} />,
    <rect x={15.5} y={4.751} width={3} height={8.5} rx={0.5} ry={0.5} />
  );

export default SvgMonitorGraph;
