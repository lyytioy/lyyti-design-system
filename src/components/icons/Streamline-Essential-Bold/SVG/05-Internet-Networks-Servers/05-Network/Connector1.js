import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgConnector1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M19 10a1 1 0 00-1-1h-2.75a.25.25 0 01-.25-.25V6a1 1 0 00-1-1h-4a1 1 0 00-1 1v2.75a.25.25 0 01-.25.25H6a1 1 0 00-1 1v4a1 1 0 001 1h2.75a.25.25 0 01.25.25V18a1 1 0 001 1h4a1 1 0 001-1v-2.75a.25.25 0 01.25-.25H18a1 1 0 001-1z" />,
    <rect y={9.75} width={3.5} height={4.5} rx={1} ry={1} />,
    <rect x={20.5} y={9.75} width={3.5} height={4.5} rx={1} ry={1} />,
    <rect x={9.75} width={4.5} height={3.5} rx={1} ry={1} />,
    <rect x={9.75} y={20.5} width={4.5} height={3.5} rx={1} ry={1} />
  );

export default SvgConnector1;
