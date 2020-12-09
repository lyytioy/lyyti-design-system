import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNavigationMenu = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <rect x={0.5} y={2.5} width={23} height={3} rx={1} ry={1} />,
    <rect x={0.5} y={10.5} width={23} height={3} rx={1} ry={1} />,
    <rect x={0.5} y={18.5} width={23} height={3} rx={1} ry={1} />
  );

export default SvgNavigationMenu;
