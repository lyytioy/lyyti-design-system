import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmartWatchCircle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M7.379 3.051a.125.125 0 00.135.014 9.98 9.98 0 018.972 0 .125.125 0 00.177-.144l-.68-2.55A.5.5 0 0015.5 0h-7a.5.5 0 00-.483.371l-.68 2.551a.125.125 0 00.042.129zM16.621 20.949a.125.125 0 00-.135-.015 9.972 9.972 0 01-8.972 0 .125.125 0 00-.177.144l.68 2.551A.5.5 0 008.5 24h7a.5.5 0 00.483-.371l.68-2.551a.125.125 0 00-.042-.129z" />,
    <circle cx={12} cy={12} r={8.5} />
  );

export default SvgSmartWatchCircle;
