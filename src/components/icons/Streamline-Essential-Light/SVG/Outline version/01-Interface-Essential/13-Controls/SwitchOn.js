import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSwitchOn = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M9 18.001c-.551 0-1-.448-1-1v-10c0-.551.449-1 1-1h6c.552 0 1 .449 1 1v10a1 1 0 01-1 1H9zm0-1h6v-6H9v6zm6-7v-3H9v3h6z" />,
    <path d="M1.5 24.001c-.827 0-1.5-.673-1.5-1.5v-21c0-.827.673-1.5 1.5-1.5h21c.827 0 1.5.673 1.5 1.5v21c0 .827-.673 1.5-1.5 1.5h-21zm0-23a.5.5 0 00-.5.5v21a.5.5 0 00.5.5h21a.5.5 0 00.5-.5v-21a.5.5 0 00-.5-.5h-21z" />,
    <circle cx={3.5} cy={3.501} r={0.75} />,
    <circle cx={20.5} cy={3.501} r={0.75} />,
    <circle cx={3.5} cy={20.501} r={0.75} />,
    <circle cx={20.5} cy={20.501} r={0.75} />
  );

export default SvgSwitchOn;
