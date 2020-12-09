import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAnswerMachine = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M5.5 24a2.496 2.496 0 01-2.449-2H1.5C.673 22 0 21.327 0 20.5v-13C0 6.673.673 6 1.5 6H3v-.5c0-1.199.845-2.215 2-2.449V.5a.5.5 0 011 0V3h2.5C9.879 3 11 4.121 11 5.5V6h11.5c.827 0 1.5.673 1.5 1.5v13c0 .827-.673 1.5-1.5 1.5H10.949A2.496 2.496 0 018.5 24h-3zm0-20C4.673 4 4 4.673 4 5.5v16c0 .827.673 1.5 1.5 1.5h3c.827 0 1.5-.673 1.5-1.5v-16C10 4.673 9.327 4 8.5 4h-3zm17 17a.5.5 0 00.5-.5v-13a.5.5 0 00-.5-.5H11v14h11.5zM1.5 7a.5.5 0 00-.5.5v13a.5.5 0 00.5.5H3V7H1.5z" />,
    <path d="M13.5 11a.5.5 0 01-.5-.5v-2a.5.5 0 01.5-.5h7a.5.5 0 01.5.5v2a.5.5 0 01-.5.5h-7zm6.5-1V9h-6v1h6z" />,
    <circle cx={13.749} cy={13.75} r={0.75} />,
    <circle cx={17} cy={13.75} r={0.75} />,
    <circle cx={13.749} cy={16.25} r={0.75} />,
    <circle cx={17} cy={16.25} r={0.75} />,
    <circle cx={13.749} cy={18.75} r={0.75} />,
    <circle cx={20.251} cy={13.75} r={0.75} />,
    <circle cx={20.251} cy={16.25} r={0.75} />,
    <circle cx={20.251} cy={18.75} r={0.75} />,
    <circle cx={17} cy={18.75} r={0.75} />
  );

export default SvgAnswerMachine;
