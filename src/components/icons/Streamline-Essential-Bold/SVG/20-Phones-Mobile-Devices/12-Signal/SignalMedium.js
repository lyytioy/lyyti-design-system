import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSignalMedium = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <rect x={0.375} y={11.996} width={3} height={6} rx={0.5} ry={0.5} />,
    <rect x={5.375} y={8.996} width={3} height={9} rx={0.5} ry={0.5} />,
    <rect x={10.375} y={5.996} width={3} height={12} rx={0.5} ry={0.5} />,
    <path d="M22.625 18h-2a1 1 0 010-2h2a1 1 0 010 2zM17.625 18h-2a1 1 0 010-2h2a1 1 0 010 2z" />
  );

export default SvgSignalMedium;
