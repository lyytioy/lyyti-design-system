import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLikePlusAlternate = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M11 19.25h2a.75.75 0 00.75-.75v-2a.25.25 0 01.25-.25h2a.75.75 0 00.75-.75v-2a.75.75 0 00-.75-.75h-2a.25.25 0 01-.25-.25v-2a.75.75 0 00-.75-.75h-2a.75.75 0 00-.75.75v2a.25.25 0 01-.25.25H8a.75.75 0 00-.75.75v2a.75.75 0 00.75.75h2a.25.25 0 01.25.25v2a.75.75 0 00.75.75z" />,
    <path d="M24 3.5a3 3 0 00-3-3h-4.5a.5.5 0 00-.5.5v6a.5.5 0 00.5.5h5a.5.5 0 01.5.5v12.5a1 1 0 01-1 1H3a1 1 0 01-1-1V8a.5.5 0 01.5-.5h5A.5.5 0 008 7V1a.5.5 0 00-.5-.5H3a3 3 0 00-3 3v17a3 3 0 003 3h18a3 3 0 003-3z" />,
    <rect x={9} y={0.5} width={6} height={7} rx={0.5} ry={0.5} />
  );

export default SvgLikePlusAlternate;
