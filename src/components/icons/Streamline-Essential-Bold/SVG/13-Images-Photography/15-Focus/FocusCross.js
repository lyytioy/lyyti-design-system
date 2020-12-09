import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFocusCross = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <rect x={10} y={10} width={4} height={4} rx={0.5} ry={0.5} />,
    <rect x={10} y={17} width={4} height={4} rx={0.5} ry={0.5} />,
    <rect x={10} y={3} width={4} height={4} rx={0.5} ry={0.5} />,
    <rect x={18} y={10} width={4} height={4} rx={0.5} ry={0.5} />,
    <rect x={2} y={10} width={4} height={4} rx={0.5} ry={0.5} />,
    <path d="M1 6.5a1 1 0 001-1V4a.5.5 0 01.5-.5H4a1 1 0 000-2H2a2 2 0 00-2 2v2a1 1 0 001 1zM4 20.5H2.5A.5.5 0 012 20v-1.5a1 1 0 00-2 0v2a2 2 0 002 2h2a1 1 0 000-2zM22 1.5h-2a1 1 0 000 2h1.5a.5.5 0 01.5.5v1.5a1 1 0 002 0v-2a2 2 0 00-2-2zM23 17.5a1 1 0 00-1 1V20a.5.5 0 01-.5.5H20a1 1 0 000 2h2a2 2 0 002-2v-2a1 1 0 00-1-1z" />
  );

export default SvgFocusCross;
