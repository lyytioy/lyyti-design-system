import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgConnector = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <rect y={15.75} width={4} height={4.5} rx={1} ry={1} />,
    <rect x={20} y={15.75} width={4} height={4.5} rx={1} ry={1} />,
    <path d="M18.5 15.75a1 1 0 00-1-1h-2.25a.25.25 0 01-.25-.25v-2.25a1 1 0 00-1-1h-4a1 1 0 00-1 1v2.25a.25.25 0 01-.25.25H6.5a1 1 0 00-1 1v4.5a1 1 0 001 1h11a1 1 0 001-1z" />,
    <rect x={10} y={2.75} width={4} height={7} rx={1} ry={1} />
  );

export default SvgConnector;
