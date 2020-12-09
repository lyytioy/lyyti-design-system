import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgEqualizerStereo1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <circle cx={2.75} cy={16.75} r={0.75} />,
    <circle cx={2.75} cy={20.25} r={0.75} />,
    <path d="M1.5 23C.673 23 0 22.327 0 21.5v-6c0-.827.673-1.5 1.5-1.5H2V2.5C2 1.673 2.673 1 3.5 1h3C7.327 1 8 1.673 8 2.5V14h8V2.5c0-.827.673-1.5 1.5-1.5h3c.827 0 1.5.673 1.5 1.5V14h.5c.827 0 1.5.673 1.5 1.5v6c0 .827-.673 1.5-1.5 1.5h-21zm0-8a.5.5 0 00-.5.5v6a.5.5 0 00.5.5h21a.5.5 0 00.5-.5v-6a.5.5 0 00-.5-.5h-21zM21 14v-3.5h-4V14h4zM7 14v-3.5H3V14h4zm14-4.5v-7a.5.5 0 00-.5-.5h-3a.5.5 0 00-.5.5v7h4zm-14 0v-7a.5.5 0 00-.5-.5h-3a.5.5 0 00-.5.5v7h4z" />,
    <path d="M6 19c-.551 0-1-.448-1-1v-1c0-.552.449-1 1-1h10a1 1 0 011 1v1a1 1 0 01-1 1H6zm0-1h10v-1H6v1zM20 20c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2zm0-3a1 1 0 100 2 1 1 0 000-2zM5.5 21a.5.5 0 010-1h2a.5.5 0 010 1h-2zM14.5 21a.5.5 0 010-1h2a.5.5 0 010 1h-2z" />,
    <circle cx={5} cy={12.25} r={0.75} />,
    <circle cx={19} cy={12.25} r={0.75} />
  );

export default SvgEqualizerStereo1;
