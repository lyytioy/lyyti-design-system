import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgChargingBatteryThreeBars = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M24 10.5a2 2 0 00-2-2h-.5v-1a2 2 0 00-2-2H2a2 2 0 00-2 2v9a2 2 0 002 2h17.5a2 2 0 002-2v-1h.5a2 2 0 002-2zm-2 2.75a.25.25 0 01-.25.25H20.5a1 1 0 00-1 1V16a.5.5 0 01-.5.5H2.5A.5.5 0 012 16V8a.5.5 0 01.5-.5H19a.5.5 0 01.5.5v1.5a1 1 0 001 1h1.25a.25.25 0 01.25.25z" />,
    <path d="M6 9.5a.5.5 0 00-.5-.5H3.875A.868.868 0 003 9.857v4.286a.868.868 0 00.875.857H5.5a.5.5 0 00.5-.5z" />,
    <rect x={7} y={9} width={3} height={6} rx={0.5} ry={0.5} />,
    <rect x={11} y={9} width={3} height={6} rx={0.5} ry={0.5} />
  );

export default SvgChargingBatteryThreeBars;
