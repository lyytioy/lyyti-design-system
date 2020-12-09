import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgChargingBatteryEmpty = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M15.5 18.25a.5.5 0 010-1h4a.5.5 0 00.5-.5v-2a.5.5 0 01.5-.5h2a.5.5 0 00.5-.5v-3a.5.5 0 00-.5-.5h-2a.5.5 0 01-.5-.5v-2a.5.5 0 00-.5-.5H15a.5.5 0 010-1h4.5c.827 0 1.5.673 1.5 1.5v1.5h1.5c.827 0 1.5.673 1.5 1.5v3c0 .827-.673 1.5-1.5 1.5H21v1.5c0 .827-.673 1.5-1.5 1.5h-4zM1.5 18.25c-.827 0-1.5-.673-1.5-1.5v-9c0-.827.673-1.5 1.5-1.5h7a.5.5 0 010 1h-7a.5.5 0 00-.5.5v9a.5.5 0 00.5.5H9a.5.5 0 010 1H1.5z" />,
    <path d="M11.5 18.75a.5.5 0 01-.5-.5v-4H8.5a.502.502 0 01-.441-.736l4-7.5A.499.499 0 0113 6.25v4h2.5a.502.502 0 01.442.735l-4 7.5a.5.5 0 01-.442.265zm0-5.5a.5.5 0 01.5.5v2.5l2.667-5H12.5a.5.5 0 01-.5-.5v-2.5l-2.667 5H11.5z" />
  );

export default SvgChargingBatteryEmpty;
