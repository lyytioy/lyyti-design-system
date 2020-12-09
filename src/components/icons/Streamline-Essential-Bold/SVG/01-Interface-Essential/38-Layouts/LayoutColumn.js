import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLayoutColumn = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <rect x={0.25} y={0.497} width={6.5} height={23} rx={1.5} ry={1.5} />,
    <rect x={8.75} y={0.497} width={6.5} height={23} rx={1.5} ry={1.5} />,
    <rect x={17.25} y={0.497} width={6.5} height={23} rx={1.5} ry={1.5} />
  );

export default SvgLayoutColumn;
