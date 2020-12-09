import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLayoutModule = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <rect x={0.25} y={0.247} width={6.5} height={6.5} rx={1.5} ry={1.5} />,
    <rect x={0.25} y={8.747} width={6.5} height={6.5} rx={1.5} ry={1.5} />,
    <rect x={0.25} y={17.247} width={6.5} height={6.5} rx={1.5} ry={1.5} />,
    <rect x={8.75} y={0.247} width={6.5} height={6.5} rx={1.5} ry={1.5} />,
    <rect x={8.75} y={8.747} width={6.5} height={6.5} rx={1.5} ry={1.5} />,
    <rect x={8.75} y={17.247} width={6.5} height={6.5} rx={1.5} ry={1.5} />,
    <rect x={17.25} y={0.247} width={6.5} height={6.5} rx={1.5} ry={1.5} />,
    <rect x={17.25} y={8.747} width={6.5} height={6.5} rx={1.5} ry={1.5} />,
    <rect x={17.25} y={17.247} width={6.5} height={6.5} rx={1.5} ry={1.5} />
  );

export default SvgLayoutModule;
