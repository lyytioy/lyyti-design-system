import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNewspaper = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M22 0H2a2 2 0 00-2 2v20a2 2 0 002 2h20a2 2 0 002-2V2a2 2 0 00-2-2zm0 21.5a.5.5 0 01-.5.5h-19a.5.5 0 01-.5-.5v-19a.5.5 0 01.5-.5h19a.5.5 0 01.5.5z" />,
    <rect x={4.25} y={4} width={15.5} height={5} rx={1.25} ry={1.25} />,
    <rect x={4.25} y={11} width={7} height={2} rx={0.75} ry={0.75} />,
    <rect x={4.25} y={14.5} width={7} height={2} rx={0.75} ry={0.75} />,
    <rect x={4.25} y={18} width={7} height={2} rx={0.75} ry={0.75} />,
    <rect x={12.75} y={18} width={7} height={2} rx={0.75} ry={0.75} />,
    <rect x={12.75} y={11} width={7} height={2} rx={0.75} ry={0.75} />,
    <rect x={12.75} y={14.5} width={7} height={2} rx={0.75} ry={0.75} />
  );

export default SvgNewspaper;
