import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLayoutBullets = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <rect y={0.747} width={5.5} height={5.5} rx={1.5} ry={1.5} />,
    <rect y={9.247} width={5.5} height={5.5} rx={1.5} ry={1.5} />,
    <rect y={17.747} width={5.5} height={5.5} rx={1.5} ry={1.5} />,
    <rect x={8.5} y={0.747} width={15.5} height={5.5} rx={1.5} ry={1.5} />,
    <rect x={8.5} y={9.247} width={15.5} height={5.5} rx={1.5} ry={1.5} />,
    <rect x={8.5} y={17.747} width={15.5} height={5.5} rx={1.5} ry={1.5} />
  );

export default SvgLayoutBullets;
