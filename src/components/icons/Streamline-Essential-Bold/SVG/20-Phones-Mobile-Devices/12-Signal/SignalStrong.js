import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSignalStrong = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <rect x={0.375} y={13.496} width={3} height={6} rx={0.5} ry={0.5} />,
    <rect x={5.375} y={10.496} width={3} height={9} rx={0.5} ry={0.5} />,
    <rect x={10.375} y={7.496} width={3} height={12} rx={0.5} ry={0.5} />,
    <rect x={15.375} y={4.496} width={3} height={15} rx={0.5} ry={0.5} />,
    <path d="M22.625 19.5h-2a1 1 0 010-2h2a1 1 0 010 2z" />
  );

export default SvgSignalStrong;
