import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgElectronicsRockerSwitch = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M9.5 21c-.827 0-1.5-.673-1.5-1.5v-16C8 2.673 8.673 2 9.5 2h9.461a1.502 1.502 0 011.371 2.109L17 11.606V19.5c0 .827-.673 1.5-1.5 1.5h-6zm6-1a.5.5 0 00.5-.5V12h-5v8h4.5zm-6-17a.5.5 0 00-.5.5v16a.5.5 0 00.5.5h.5v-8.5c0-.063.012-.125.036-.184L13.73 3H9.5zm6.675 8l3.243-7.297A.5.5 0 0018.961 3h-4.136l-3.556 8h4.906z" />,
    <path d="M1.5 24C.673 24 0 23.327 0 22.5v-21C0 .673.673 0 1.5 0h21c.827 0 1.5.673 1.5 1.5v21c0 .827-.673 1.5-1.5 1.5h-21zm0-23a.5.5 0 00-.5.5v21a.5.5 0 00.5.5h21a.5.5 0 00.5-.5v-21a.5.5 0 00-.5-.5h-21z" />,
    <circle cx={3.5} cy={3.5} r={0.75} />,
    <circle cx={3.5} cy={20.5} r={0.75} />,
    <circle cx={20.5} cy={20.5} r={0.75} />
  );

export default SvgElectronicsRockerSwitch;
