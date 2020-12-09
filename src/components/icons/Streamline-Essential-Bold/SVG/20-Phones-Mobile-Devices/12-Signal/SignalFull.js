import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSignalFull = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <rect x={0.5} y={15} width={3} height={6} rx={0.5} ry={0.5} />,
    <rect x={5.5} y={12} width={3} height={9} rx={0.5} ry={0.5} />,
    <rect x={10.5} y={9} width={3} height={12} rx={0.5} ry={0.5} />,
    <rect x={15.5} y={6} width={3} height={15} rx={0.5} ry={0.5} />,
    <rect x={20.5} y={3} width={3} height={18} rx={0.5} ry={0.5} />
  );

export default SvgSignalFull;
