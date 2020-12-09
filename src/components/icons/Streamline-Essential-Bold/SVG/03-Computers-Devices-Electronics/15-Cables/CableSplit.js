import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCableSplit = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <circle cx={11.12} cy={11.817} r={3.5} />,
    <path d="M22.588 3.087L20.294.793a1 1 0 00-1.414 0l-4.292 4.293a1 1 0 000 1.414l2.293 2.294a1 1 0 001.414 0L22.588 4.5a1 1 0 000-1.413z" />,
    <rect x={8.62} y={21.001} width={5} height={2.5} rx={1} ry={1} />,
    <rect x={8.62} y={17.001} width={5} height={2.5} rx={1} ry={1} />,
    <path d="M5.593 3.354a.992.992 0 00-.293-.707l-.354-.354a1.025 1.025 0 00-1.414 0L1.413 4.415a1 1 0 000 1.414l.354.354a1 1 0 001.414 0L5.3 4.061a.993.993 0 00.293-.707zM8.421 6.183a.989.989 0 00-.292-.707l-.353-.354a1.025 1.025 0 00-1.414 0L4.24 7.243a1 1 0 000 1.414l.354.354a1 1 0 001.414 0L8.129 6.89a.992.992 0 00.292-.707z" />
  );

export default SvgCableSplit;
