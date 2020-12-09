import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPasswordDesktop = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M5.5 12c-.827 0-1.5-.673-1.5-1.5v-4C4 5.673 4.673 5 5.5 5h13c.827 0 1.5.673 1.5 1.5v4c0 .827-.673 1.5-1.5 1.5h-13zm0-6a.5.5 0 00-.5.5v4a.5.5 0 00.5.5h13a.5.5 0 00.5-.5v-4a.5.5 0 00-.5-.5h-13z" />,
    <path d="M7.5 24a.5.5 0 010-1h1.369a6.98 6.98 0 001.085-3H1.5C.673 20 0 19.327 0 18.5v-17C0 .673.673 0 1.5 0h21c.827 0 1.5.673 1.5 1.5v17c0 .827-.673 1.5-1.5 1.5h-8.454a6.988 6.988 0 001.085 3H16.5a.5.5 0 010 1h-9zm6.467-1a8.017 8.017 0 01-.927-3h-2.08a8.017 8.017 0 01-.927 3h3.934zM1 18.5a.5.5 0 00.5.5h21a.5.5 0 00.5-.5V17H1v1.5zM23 16V1.5a.5.5 0 00-.5-.5h-21a.5.5 0 00-.5.5V16h22z" />,
    <circle cx={8} cy={8.5} r={0.75} />,
    <circle cx={12} cy={8.5} r={0.75} />,
    <circle cx={16} cy={8.5} r={0.75} />
  );

export default SvgPasswordDesktop;
