import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgControlsPause = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <rect x={3} y={1} width={7} height={22} rx={1.5} ry={1.5} />,
    <rect x={14} y={1} width={7} height={22} rx={1.5} ry={1.5} />
  );

export default SvgControlsPause;
