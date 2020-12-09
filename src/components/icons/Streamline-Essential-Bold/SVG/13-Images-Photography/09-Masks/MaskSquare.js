import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMaskSquare = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M22 0H2a2 2 0 00-2 2v20a2 2 0 002 2h20a2 2 0 002-2V2a2 2 0 00-2-2zm0 21.5a.5.5 0 01-.5.5h-19a.5.5 0 01-.5-.5v-19a.5.5 0 01.5-.5h19a.5.5 0 01.5.5z" />,
    <rect x={5} y={5} width={14} height={14} rx={1} ry={1} />
  );

export default SvgMaskSquare;
