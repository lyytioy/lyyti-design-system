import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSignalLow = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <rect x={0.375} y={10.5} width={3} height={6} rx={0.5} ry={0.5} />,
    <rect x={5.375} y={7.5} width={3} height={9} rx={0.5} ry={0.5} />,
    <path d="M22.625 16.5h-2a1 1 0 010-2h2a1 1 0 010 2zM17.625 16.5h-2a1 1 0 010-2h2a1 1 0 010 2zM12.625 16.5h-2a1 1 0 010-2h2a1 1 0 010 2z" />
  );

export default SvgSignalLow;
